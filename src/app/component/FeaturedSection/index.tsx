"use client";

import HeaderText from "../HeaderText";
import { motion } from "motion/react";

export default function FeaturedSection() {
  return (
    <div className="relative min-h-96 bg-radial-[at_50%_50%] from-10% from-[#f6ebd1] via-[#EEE6CE] via-70% to -100% to-[#EEE6CE] p-6">
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
      <HeaderText text="Blooming Beauty" />
    </div>
  );
}
