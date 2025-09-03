"use client";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import FeaturedSection from "./component/FeaturedSection";
import { useEffect } from "react";
import TopPicksSection from "./component/TopPicksSection";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      {/* ---------------- Main Navbar ------------------- */}
      <Navbar />

      {/* ----------------- Hero Section ---------------- */}

      <Hero />

      {/* ------------ Section --------------- */}

      <FeaturedSection />

      <TopPicksSection />
    </div>
  );
}
