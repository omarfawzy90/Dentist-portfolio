"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentPage, setCurrentPage] = useState("/");

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      {children}
      <Footer />
    </>
  );
}
