import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import FeaturedSection from "./component/FeaturedSection";

export default function Home() {
  return (
    <div>
      {/* ---------------- Main Navbar ------------------- */}
      <Navbar />

      {/* ----------------- Hero Section ---------------- */}

      <Hero />

      {/* ------------ Section --------------- */}

      <FeaturedSection />
    </div>
  );
}
