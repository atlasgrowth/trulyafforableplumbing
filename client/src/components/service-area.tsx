import { motion } from "framer-motion";

const serviceAreas = [
  "Florence, MS",
  "Pearl, MS",
  "Brandon, MS",
  "Clinton, MS",
  "Jackson, MS",
  "Richland, MS",
  "Ridgeland, MS",
  "Flowood, MS",
  "Byram, MS",
  "Madison, MS"
];

export default function ServiceArea() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Service Areas</h2>
          <p className="max-w-2xl mx-auto">
            Proudly serving Jackson MS and surrounding communities with reliable plumbing services
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {serviceAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 rounded-lg p-4 text-center"
            >
              {area}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
