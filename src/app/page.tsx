"use client";

import CaseStudiesSection from "@/components/CaseStudies";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ServicesSection from "../components/Services";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("/");

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesSection />
      <CaseStudiesSection />
    </div>
  );
}
