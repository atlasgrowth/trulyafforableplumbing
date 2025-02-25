import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Droplet, Flame, AlertTriangle, Home, Clock, Phone } from "lucide-react";

const services = [
  {
    icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
    title: "Emergency Services",
    description: "24/7 emergency plumbing repairs and support when you need it most",
    urgent: true
  },
  {
    icon: <Wrench className="h-8 w-8 text-blue-600" />,
    title: "Plumbing Repairs",
    description: "Expert repairs for leaks, clogs, and all plumbing issues"
  },
  {
    icon: <Droplet className="h-8 w-8 text-blue-600" />,
    title: "Water Heater Services",
    description: "Installation, repair, and maintenance of water heaters"
  },
  {
    icon: <Flame className="h-8 w-8 text-blue-600" />,
    title: "Gas Line Services",
    description: "Professional natural gas line installation and repairs"
  },
  {
    icon: <Home className="h-8 w-8 text-blue-600" />,
    title: "Residential Plumbing",
    description: "Complete home plumbing solutions and maintenance"
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: "Preventive Maintenance",
    description: "Regular maintenance to prevent costly repairs"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Our Professional Services</h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg mb-8">
            Truly Affordable Plumbing provides expert services for all your plumbing needs
          </p>
          <Button 
            size="lg"
            variant="secondary"
            className="flex items-center gap-2 mx-auto hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            <Phone className="h-5 w-5" />
            <a href="tel:+16012594203">Call Now: (601) 259-4203</a>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 rounded-full bg-blue-50">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-center mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-center text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center pb-6">
                  <Button 
                    variant={service.urgent ? "destructive" : "default"}
                    className="flex items-center gap-2 hover:scale-105 transition-transform"
                  >
                    <Phone className="h-4 w-4" />
                    <a href="tel:+16012594203">
                      {service.urgent ? 'Emergency Service' : 'Schedule Service'}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}