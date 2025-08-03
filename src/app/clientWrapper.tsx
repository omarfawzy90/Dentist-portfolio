"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header currentPage="home" onNavigate={(page) => console.log(page)} />
      {children}
      <Footer />
    </>
  );
}
