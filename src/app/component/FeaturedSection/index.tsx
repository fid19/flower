"use client";

import HeaderText from "../HeaderText";
import { motion, stagger } from "motion/react";
import Divider from "../ui/Divider";

export default function FeaturedSection() {
  return (
    <div className="relative min-h-96 bg-radial-[at_50%_50%] from-10% from-[#f6ebd1] via-[#EEE6CE] via-70% to-100% to-[#EEE6CE] py-12 md:py-24 px-6">
      <Divider />

      <motion.div
        variants={{
          hidden: {
            opacity: 0,
          },
          show: {
            opacity: 1,
          },
        }}
        className="max-w-[1200px] mx-auto mb-4"
      >
        <span className="text-secondary-100 text-xs sm:text-sm lg:text-lg uppercase inline-block pl-1.5">
          Discover the magic of flower with us
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair text-secondary-100">
          Blooming Beauty
        </h2>
      </motion.div>

      <motion.div
        variants={{
          show: {
            scale: 1,
            opacity: 1,
            transition: {
              type: "tween",
              duration: 1,
              when: "beforeChildren",
              delayChildren: stagger(0.3),
            },
          },
          hidden: {
            scale: 0,
            opacity: 0,
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
        }}
        className="relative grid grid-cols-6 sm:grid-cols-12 min-h-96 h-[80vh] flex-col sm:flex-row max-w-[1200px] mx-auto w-full gap-12"
      >
        <div className="justify-between flex flex-col col-span-full sm:col-span-8 z-10 gap-8">
          <motion.p
            variants={{
              hidden: {
                opacity: 0,
              },

              show: {
                opacity: 1,
              },
            }}
            className="col-span-full md:inline-block text-justify text-sm! md:text-lg! leading-7! text-secondary-100! font-extralight! font-sans! rounded-sm bg-[#EEE6CE]/70 backdrop-blur-md p-4 m-1"
          >
            Whether it&apos;s a love confession whispered on a rose petal or a
            joyous symphony of colors celebrating life&apos;s milestones, let
            our arrangements be our heartfelt expression. Discover the magic of
            flowers with us.
          </motion.p>
        </div>

        <video
          preload="auto"
          playsInline
          loop={true}
          autoPlay
          muted
          className="absolute w-full inset-0 h-full object-cover rounded-sm"
          src="/butterfly-flower.webm"
        ></video>

        <div className="absolute inset-0 bg-[#EEE6CE] opacity-10"></div>
      </motion.div>
    </div>
  );
}
