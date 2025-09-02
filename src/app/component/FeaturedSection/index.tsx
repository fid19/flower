"use client";

import HeaderText from "../HeaderText";
import { motion } from "motion/react";

export default function FeaturedSection() {
  return (
    <div className="relative min-h-96 bg-radial-[at_50%_50%] from-10% from-[#f6ebd1] via-[#EEE6CE] via-70% to-100% to-[#EEE6CE] py-6 md:py-12 px-6">
      <div className="px-6 absolute flex inset-x-0 top-0 items-center gap-5">
        <motion.div
          whileHover={{
            rotate: 180,
          }}
          transition={{
            duration: 0.3,
          }}
          className="h-2 w-2 text-secondary-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            viewBox="0 0 13 12"
            fill="none"
            className="icon-12px"
          >
            <path
              d="M0.5 6.46154V5.53846H6.03846V0H6.96154V5.53846H12.5V6.46154H6.96154V12H6.03846V6.46154H0.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </motion.div>
        <div className="h-0.5 flex-1 bg-secondary-100/30"></div>
        <motion.div
          whileHover={{
            rotate: 180,
          }}
          transition={{
            duration: 0.3,
          }}
          className="h-2 w-2 text-secondary-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            viewBox="0 0 13 12"
            fill="none"
            className="icon-12px"
          >
            <path
              d="M0.5 6.46154V5.53846H6.03846V0H6.96154V5.53846H12.5V6.46154H6.96154V12H6.03846V6.46154H0.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </motion.div>
      </div>

      <div className="relative flex min-h-96 md:h-[70vh] flex-col sm:flex-row-reverse sm:max-w-[1200px] mx-auto">
        <div className="max-sm:h-24 w-full md:w-full relative">
          <video
            preload="auto"
            playsInline
            loop={true}
            autoPlay
            muted
            className="w-full aspect-square h-72  absolute object-cover content sm:h-full sm:relative"
            src="/butterfly-flower.webm"
          ></video>
        </div>

        <div className="pb-3 justify-between flex flex-col w-full lg:w-1/2 z-10 gap-8">
          <div>
            <span className="text-secondary-100 text-xs sm:text-sm lg:text-lg uppercase inline-block pl-1.5">
              Discover the magic of flower with us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair text-secondary-100">
              Blooming Beauty
            </h2>
          </div>

          <p className="md:inline-block pr-6 text-justify text-lg! md:text-lg! leading-7! text-secondary-100! font-light! font-sans!">
            Whether it&apos; a love confession whispered on a rose petal or a
            joyous symphony of colors celebrating life&apos;s milestones, let
            our arrangements be our heartfelt expression. Discover the magic of
            flowers with us.
          </p>
        </div>

        <div className="absolute inset-0 bg-[#EEE6CE] opacity-80 sm:opacity-40"></div>
      </div>
    </div>
  );
}
