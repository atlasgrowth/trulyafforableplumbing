import Hero from "@/components/hero";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import ServiceArea from "@/components/service-area";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ServiceArea />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
