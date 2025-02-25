import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Home, DollarSign, Wrench, Shield } from "lucide-react";

const benefits = [
  {
    icon: <Clock className="h-6 w-6 text-blue-500" />,
    title: "24/7 Emergency Service",
    description: "Available anytime, day or night, for all your plumbing emergencies"
  },
  {
    icon: <DollarSign className="h-6 w-6 text-green-500" />,
    title: "Upfront Pricing",
    description: "Clear, honest pricing with no hidden fees or surprises"
  },
  {
    icon: <Home className="h-6 w-6 text-blue-500" />,
    title: "Locally Owned",
    description: "Proudly serving Jackson MS and surrounding areas since 2020"
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-green-500" />,
    title: "Licensed & Insured",
    description: "Professional, reliable, and fully certified service"
  },
  {
    icon: <Wrench className="h-6 w-6 text-blue-500" />,
    title: "Expert Team",
    description: "Skilled technicians with years of experience"
  },
  {
    icon: <Shield className="h-6 w-6 text-green-500" />,
    title: "Satisfaction Guaranteed",
    description: "Your satisfaction is our top priority"
  }
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Truly Affordable Plumbing has been Jackson's trusted plumbing service provider since 2020. 
            We take pride in delivering quality workmanship, honest pricing, and exceptional customer service 
            to our community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-blue-50 rounded-full">
                        {benefit.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}