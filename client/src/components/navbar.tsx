import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <img 
              src="https://scontent.fjan1-1.fna.fbcdn.net/v/t39.30808-1/277575501_401651531965369_937663200099246330_n.png"
              alt="Truly Affordable Plumbing" 
              className="h-12 cursor-pointer"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className="text-gray-700 hover:text-blue-600">Home</a>
            </Link>
            <Link href="/services">
              <a className="text-gray-700 hover:text-blue-600">Services</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-700 hover:text-blue-600">Contact</a>
            </Link>
            <Button variant="default" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+16012594203">(601) 259-4203</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}