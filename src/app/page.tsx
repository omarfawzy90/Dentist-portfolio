import CaseStudiesSection from "@/components/CaseStudies";
import Hero from "../components/Hero";
import ServicesSection from "../components/Services";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesSection />
      <CaseStudiesSection />
    </div>
  );
}
