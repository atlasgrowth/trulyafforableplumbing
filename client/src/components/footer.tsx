import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/logo.svg" 
              alt="Truly Affordable Plumbing" 
              className="h-12 mb-4"
            />
            <p className="text-gray-400">
              Professional plumbing services available 24/7 for all your emergency needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a 
                href="tel:+16012594203" 
                className="flex items-center gap-2 text-gray-400 hover:text-white"
              >
                <Phone className="h-5 w-5" />
                (601) 259-4203
              </a>
              <a 
                href="mailto:trulyaffordableplumbing@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                trulyaffordableplumbing@gmail.com
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-5 w-5" />
                Jackson, MS
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/">
                <a className="block text-gray-400 hover:text-white">Home</a>
              </Link>
              <Link href="/services">
                <a className="block text-gray-400 hover:text-white">Services</a>
              </Link>
              <Link href="/contact">
                <a className="block text-gray-400 hover:text-white">Contact</a>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Truly Affordable Plumbing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
