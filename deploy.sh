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

# Step 4: Save all changes to main branch
echo "Saving all changes to main branch..."
git add .
git commit -m "Update project code - $DEPLOY_DATE" || echo "No changes to commit"

# Step 5: Push the main branch to GitHub (this stores all your source code)
echo "Pushing source code to main branch..."
git push -u origin main

# Step 6: Build the client-side application
echo "Building the client application for GitHub Pages..."
# Set the correct base URL and build path for GitHub Pages
export VITE_BASE_URL="/trulyafforableplumbing/"
npm run build

# Step 7: Prepare and deploy to gh-pages branch
echo "Setting up deployment to gh-pages branch..."

# Clean up any previous gh-pages branch
rm -rf .deploy
mkdir -p .deploy

# Copy the built files
cp -r dist/public/* .deploy/

# Create 404.html to handle client-side routing
cp .deploy/index.html .deploy/404.html

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