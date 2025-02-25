import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Droplet, Flame, AlertTriangle, Home, Clock, Phone } from "lucide-react";

const services = [
  {
    icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
    title: "Emergency Services",
    description: "24/7 emergency plumbing repairs and support when you need it most from Truly Affordable Plumbing",
    urgent: true
  },
  {
    icon: <Wrench className="h-8 w-8 text-blue-500" />,
    title: "Plumbing Repairs",
    description: "Expert repairs for leaks, clogs, and all plumbing issues with our professional team"
  },
  {
    icon: <Droplet className="h-8 w-8 text-blue-500" />,
    title: "Water Heater Services",
    description: "Professional installation, repair, and maintenance of water heaters"
  },
  {
    icon: <Flame className="h-8 w-8 text-orange-500" />,
    title: "Gas Line Services",
    description: "Professional natural gas line installation and repairs by certified experts"
  },
  {
    icon: <Home className="h-8 w-8 text-blue-500" />,
    title: "Residential Plumbing",
    description: "Complete home plumbing solutions from Jackson's trusted plumbing service"
  },
  {
    icon: <Clock className="h-8 w-8 text-green-500" />,
    title: "Preventive Maintenance",
    description: "Regular maintenance plans to prevent costly repairs and ensure peace of mind"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066FF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-600 rounded-full px-4 py-1 text-sm font-semibold mb-4">
            Truly Affordable Plumbing Services
          </span>
          <h2 className="text-4xl font-bold mb-4">Professional Plumbing Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
            Delivering quality plumbing services to Jackson MS and surrounding areas, available 24/7 for your needs
          </p>
          <Button 
            size="lg"
            variant="default"
            className="flex items-center gap-2 mx-auto hover:scale-105 transition-transform shadow-lg"
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
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                {/* Card Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: service.urgent ? 
                      `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF0000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` :
                      `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066FF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }} />
                </div>

                <CardHeader>
                  <div className="mb-4 flex justify-center">
                    <div className={`p-4 rounded-full ${service.urgent ? 'bg-red-50' : 'bg-blue-50'} relative z-10`}>
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-center mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-center text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center pb-6">
                  <Button 
                    variant={service.urgent ? "destructive" : "outline"}
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