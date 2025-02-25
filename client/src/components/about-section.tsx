import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Home, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: <Clock className="h-6 w-6 text-blue-500" />,
    title: "24/7 Availability",
    description: "Emergency services available anytime, day or night"
  },
  {
    icon: <DollarSign className="h-6 w-6 text-green-500" />,
    title: "Upfront Pricing",
    description: "Clear, honest pricing with no hidden fees"
  },
  {
    icon: <Home className="h-6 w-6 text-blue-500" />,
    title: "Locally Owned",
    description: "Serving Jackson MS and surrounding areas since 2020"
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-blue-500" />,
    title: "Licensed & Insured",
    description: "Professional, reliable, and fully certified service"
  }
];

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Truly Affordable Plumbing provides quality service with integrity and professionalism
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
