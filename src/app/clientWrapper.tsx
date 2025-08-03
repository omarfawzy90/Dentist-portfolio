// File: src/app/ClientWrapper.tsx
"use client"; // This makes *just this component* a client component

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // You can now safely use hooks like useEffect, useState, etc.
  return (
    <>
      <Header currentPage="home" onNavigate={(page) => console.log(page)} />
      {children}
      <Footer />
    </>
  );
}
