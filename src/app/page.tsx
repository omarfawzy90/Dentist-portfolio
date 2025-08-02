"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      <Hero />
    </div>
  );
}
