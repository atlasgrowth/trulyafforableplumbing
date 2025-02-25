import { motion } from "framer-motion";
import ContactForm from "@/components/contact-form";
import ServiceArea from "@/components/service-area";
import { Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-blue-600 text-white py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with us for all your plumbing needs, available 24/7 for emergencies
          </p>
        </div>
      </motion.section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-center gap-4 p-6">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <a href="tel:+16012594203" className="text-blue-600">
                        (601) 259-4203
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="flex items-center gap-4 p-6">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a 
                        href="mailto:trulyaffordableplumbing@gmail.com"
                        className="text-blue-600"
                      >
                        trulyaffordableplumbing@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="flex items-center gap-4 p-6">
                    <Clock className="h-6 w-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Hours</h3>
                      <p>Available 24/7 for emergencies</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <ServiceArea />
    </div>
  );
}
