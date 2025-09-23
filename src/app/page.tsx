"use client";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import FeaturedSection from "./component/FeaturedSection";
import { useEffect } from "react";
import TopPicksSection from "./component/TopPicksSection";
import LoopingLogos from "./component/LoopingLogos";
import Footer from "./component/Footer";
import FlowerCollection from "./component/FlowerCollection";

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
      <TopPicksSection />

      {/* <FeaturedSection /> */}

      <FlowerCollection />

      <Footer />
    </div>
  );
}
