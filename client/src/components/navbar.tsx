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
              src="https://scontent.fjan1-1.fna.fbcdn.net/v/t39.30808-1/277575501_401651531965369_937663200099246330_n.png?stp=dst-png_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=95gnOCkxFq4Q7kNvgGTFmec&_nc_oc=Adg5TA5uDOYZmpupuSVwtVxr-XSx_uCsR8C8YVIDxyaANykEZIfc2HeW6AFwXh0hpNk&_nc_zt=24&_nc_ht=scontent.fjan1-1.fna&_nc_gid=AuMBrcEN4WkXF2oRTBdJzCd&oh=00_AYAXUdSFULdX0gVEz-c6polgQBJqxS9TqHH4oVUeVdCuTg&oe=67C3D3F1"
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