import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Droplet, Flame, AlertTriangle, Home, Clock, Phone } from "lucide-react";

const services = [
  {
    icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
    title: "Emergency Services",
    description: "24/7 emergency plumbing repairs and support when you need it most",
    urgent: true,
    bgColor: "bg-gradient-to-br from-red-50 to-orange-50"
  },
  {
    icon: <Wrench className="h-8 w-8 text-blue-600" />,
    title: "Plumbing Repairs",
    description: "Expert repairs for leaks, clogs, and all plumbing issues",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50"
  },
  {
    icon: <Droplet className="h-8 w-8 text-cyan-500" />,
    title: "Water Heater Services",
    description: "Installation, repair, and maintenance of water heaters",
    bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50"
  },
  {
    icon: <Flame className="h-8 w-8 text-orange-500" />,
    title: "Gas Line Services",
    description: "Professional natural gas line installation and repairs",
    bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50"
  },
  {
    icon: <Home className="h-8 w-8 text-green-600" />,
    title: "Residential Plumbing",
    description: "Complete home plumbing solutions and maintenance",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50"
  },
  {
    icon: <Clock className="h-8 w-8 text-purple-600" />,
    title: "Preventive Maintenance",
    description: "Regular maintenance to prevent costly repairs",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-50"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Professional Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
            Truly Affordable Plumbing provides expert services for all your plumbing needs
          </p>
          <Button 
            size="lg"
            variant="default"
            className="flex items-center gap-2 mx-auto bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
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
              <Card className={`h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${service.bgColor}`}>
                <CardHeader>
                  <div className="mb-4 flex justify-center">
                    <div className={`p-6 rounded-full bg-white/80 shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-center mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-center text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center pb-6">
                  <Button 
                    variant={service.urgent ? "destructive" : "default"}
                    className={`flex items-center gap-2 transform hover:scale-105 transition-all duration-300 ${
                      service.urgent 
                        ? 'bg-red-500 hover:bg-red-600' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
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