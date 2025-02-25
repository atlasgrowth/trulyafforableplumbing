import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Clock } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-blue-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="z-10"
          >
            <span className="inline-block bg-white/20 text-white rounded-full px-4 py-1 text-sm font-semibold mb-4">
              Truly Affordable Plumbing - Your Trusted Local Expert
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              24/7 Emergency Plumbing Services in Jackson, MS
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Professional plumbing services you can trust, at truly affordable prices. Serving Jackson and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                variant="secondary"
                className="flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <Phone className="h-5 w-5" />
                <a href="tel:+16012594203">Call Now: (601) 259-4203</a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors"
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
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-transparent rounded-lg z-10" />
            <img
              src="/truck.jpg"
              alt="Truly Affordable Plumbing Service Truck"
              className="rounded-lg shadow-2xl relative z-0"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}