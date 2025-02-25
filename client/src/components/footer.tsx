import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/logo.png" 
              alt="Truly Affordable Plumbing" 
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-blue-100">
              Professional plumbing services available 24/7 for all your emergency needs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a 
                href="tel:+16012594203" 
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
                (601) 259-4203
              </a>
              <a 
                href="mailto:trulyaffordableplumbing@gmail.com"
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                trulyaffordableplumbing@gmail.com
              </a>
              <div className="flex items-center gap-2 text-blue-100">
                <MapPin className="h-5 w-5" />
                Jackson, MS
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/">
                <a className="block text-blue-100 hover:text-white transition-colors">Home</a>
              </Link>
              <Link href="/services">
                <a className="block text-blue-100 hover:text-white transition-colors">Services</a>
              </Link>
              <Link href="/contact">
                <a className="block text-blue-100 hover:text-white transition-colors">Contact</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} Truly Affordable Plumbing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}