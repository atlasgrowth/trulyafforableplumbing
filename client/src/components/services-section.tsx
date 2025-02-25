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
    icon: <Wrench className="h-8 w-8 text-blue-500" />,
    title: "Plumbing Repairs",
    description: "Expert repairs for leaks, clogs, and all plumbing issues"
  },
  {
    icon: <Droplet className="h-8 w-8 text-blue-500" />,
    title: "Water Heater Services",
    description: "Installation, repair, and maintenance of water heaters"
  },
  {
    icon: <Flame className="h-8 w-8 text-orange-500" />,
    title: "Gas Line Services",
    description: "Professional natural gas line installation and repairs"
  },
  {
    icon: <Home className="h-8 w-8 text-blue-500" />,
    title: "Residential Plumbing",
    description: "Complete home plumbing solutions and maintenance"
  },
  {
    icon: <Clock className="h-8 w-8 text-green-500" />,
    title: "Preventive Maintenance",
    description: "Regular maintenance to prevent costly repairs"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
            Professional plumbing services for all your residential needs, available 24/7
          </p>
          <Button 
            size="lg"
            variant="default"
            className="flex items-center gap-2 mx-auto"
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
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4 flex justify-center">
                    <div className={`p-4 rounded-full ${service.urgent ? 'bg-red-50' : 'bg-blue-50'}`}>
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-center mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-center text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center pb-6">
                  <Button 
                    variant={service.urgent ? "destructive" : "outline"}
                    className="flex items-center gap-2"
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