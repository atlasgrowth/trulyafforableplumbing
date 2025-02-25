#!/bin/bash
set -e
echo "🚀 Starting fixed GitHub deployment process..."

# Get current date for commit messages
DEPLOY_DATE=$(date "+%Y-%m-%d %H:%M:%S")

# More explicit GitHub token handling
GITHUB_URL="https://${GITHUB_TOKEN}@github.com/atlasgrowth/trulyafforableplumbing.git"

# Step 1: Initialize git if not already initialized
if [ ! -d .git ]; then
  echo "Initializing git repository..."
  git init
  git branch -M main
fi

# Step 2: Configure git remote with explicit token
if git remote -v | grep -q origin; then
  git remote set-url origin "${GITHUB_URL}"
else
  git remote add origin "${GITHUB_URL}"
fi

# Step 3: Configure git user identity (important for Replit)
git config user.name "Replit Deployment"
git config user.email "deployment@example.com"

# Step 4: Save all current changes to main branch
echo "Saving all changes to main branch..."
git add .
git commit -m "Update project code - $DEPLOY_DATE" || echo "No changes to commit"

# Step 5: Push the main branch to GitHub (this stores all your source code)
echo "Pushing source code to main branch..."
git push -u origin main || (echo "Error pushing to main branch. You might need to pull first." && exit 1)

# Step 6: Build the client-side application
echo "Building the client application for GitHub Pages..."
VITE_BASE_URL=/trulyafforableplumbing/ npm run build

# Step 7: Prepare and deploy to gh-pages branch
echo "Setting up deployment to gh-pages branch..."

# Clean up any previous gh-pages branch
rm -rf .deploy
mkdir -p .deploy

# Copy the built files
cp -r dist/public/* .deploy/

# Create 404.html that redirects all requests to index.html
cat > .deploy/404.html << EOL
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Truly Affordable Plumbing</title>
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // MIT License
      // https://github.com/rafgraph/spa-github-pages
      var pathSegmentsToKeep = 1;

      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
    Redirecting...
  </body>
</html>
EOL

# Add special redirect handling to index.html
sed -i '/<\/head>/i \
    <script type="text/javascript"> \
      // Single Page Apps for GitHub Pages \
      // MIT License \
      // https://github.com/rafgraph/spa-github-pages \
      (function(l) { \
        if (l.search[1] === "/") { \
          var decoded = l.search.slice(1).split("&").map(function(s) { \
            return s.replace(/~and~/g, "&") \
          }).join("?"); \
          window.history.replaceState(null, null, \
            l.pathname.slice(0, -1) + decoded + l.hash \
          ); \
        } \
      }(window.location)) \
    </script>' .deploy/index.html

# Navigate to the deploy directory
cd .deploy

# Initialize a new git repository for gh-pages branch
echo "Initializing git repository for gh-pages deployment..."
git init
git checkout -b gh-pages

# Configure git for the deployment
git config user.name "Replit Deployment"
git config user.email "deployment@example.com"

# Add all files
git add .

# Commit
git commit -m "Deploy to GitHub Pages - $DEPLOY_DATE"

# Force push to the gh-pages branch with explicit token
echo "Pushing to gh-pages branch..."
git push -f "${GITHUB_URL}" gh-pages

echo "🎉 Deployment complete!"
echo "✅ Source code pushed to: https://github.com/atlasgrowth/trulyafforableplumbing"
echo "✅ Website deployed to: https://atlasgrowth.github.io/trulyafforableplumbing/"