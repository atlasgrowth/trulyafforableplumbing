import { motion } from "framer-motion";
import ServicesSection from "@/components/services-section";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Services() {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-blue-600 text-white py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Professional plumbing services for residential needs, available 24/7
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="flex items-center gap-2"
          >
            <Phone className="h-5 w-5" />
            <a href="tel:+16012594203">Call Now: (601) 259-4203</a>
          </Button>
        </div>
      </motion.section>
      
      <ServicesSection />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Emergency Service?</h2>
          <p className="text-xl mb-6">
            We're available 24/7 for all your plumbing emergencies
          </p>
          <Button 
            size="lg"
            variant="default"
            className="flex items-center gap-2"
          >
            <Phone className="h-5 w-5" />
            <a href="tel:+16012594203">Call (601) 259-4203</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
