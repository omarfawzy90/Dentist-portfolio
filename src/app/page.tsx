import { getCaseStudies } from "@/app/actions/getAllCases";
import CaseStudiesSection from "@/components/CaseStudies";
import Hero from "../components/Hero";
import ServicesSection from "../components/Services";

export default async function Home() {
  const caseStudies = await getCaseStudies();

  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesSection />
      <CaseStudiesSection caseStudies={caseStudies} />
    </div>
  );
}
