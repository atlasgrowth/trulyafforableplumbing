import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Clock } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              24/7 Emergency Plumbing Services
            </h1>
            <p className="text-xl mb-6">
              Professional plumbing services you can trust, at truly affordable prices
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                variant="secondary"
                className="flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                <a href="tel:+16012594203">Call Now: (601) 259-4203</a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="flex items-center gap-2 bg-white/10"
              >
                <Clock className="h-5 w-5" />
                Available 24/7
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="./truck.jpg"
              alt="Truly Affordable Plumbing Service Truck"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}