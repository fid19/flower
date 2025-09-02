"use client";

import HeaderText from "../HeaderText";
import { motion } from "motion/react";
import Divider from "../ui/Divider";

export default function FeaturedSection() {
  return (
    <div className="relative min-h-96 bg-radial-[at_50%_50%] from-10% from-[#f6ebd1] via-[#EEE6CE] via-70% to-100% to-[#EEE6CE] py-12 md:py-24 px-6">
      <Divider />

      <div className="relative grid grid-cols-6 sm:grid-cols-12 min-h-96 h-[80vh] flex-col sm:flex-row max-w-[1200px] mx-auto w-full gap-12">
        <div className="justify-between flex flex-col col-span-full sm:col-span-8 z-10 gap-8">
          <div className="p-4">
            <span className="text-secondary-100 text-xs sm:text-sm lg:text-lg uppercase inline-block pl-1.5">
              Discover the magic of flower with us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair text-secondary-100">
              Blooming Beauty
            </h2>
          </div>

          <p className="col-span-full md:inline-block text-justify text-sm! md:text-lg! leading-7! text-secondary-100! font-extralight! font-sans! bg-[#EEE6CE] p-4 max-sm:m-1">
            Whether it&apos;s a love confession whispered on a rose petal or a
            joyous symphony of colors celebrating life&apos;s milestones, let
            our arrangements be our heartfelt expression. Discover the magic of
            flowers with us.
          </p>
        </div>

        <video
          preload="auto"
          playsInline
          loop={true}
          autoPlay
          muted
          className="absolute w-full inset-0 h-full object-cover"
          src="/butterfly-flower.webm"
        ></video>

        <div className="absolute inset-0 bg-[#EEE6CE] opacity-10"></div>
      </div>
    </div>
  );
}
