import Navbar from "./component/Navbar";
import Hero from "./component/Hero";

export default function Home() {
  return (
    <div>
      {/* ---------------- Main Navbar ------------------- */}
      <Navbar />

      {/* ----------------- Hero Section ---------------- */}

      <Hero />
    </div>
  );
}
