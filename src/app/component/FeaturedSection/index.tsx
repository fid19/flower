"use client";

import HeaderText from "../HeaderText";
import { motion, stagger } from "motion/react";
import Divider from "../ui/Divider";
import SectionContainer from "../ui/SectionContainer";

export default function FeaturedSection() {
  return (
    <SectionContainer className="relative min-h-96 bg-radial-[at_50%_50%] from-10% from-[#f6ebd1] via-[#EEE6CE] via-70% to-100% to-[#EEE6CE]">
      <Divider textClass="-top-1!" />

      {/* <motion.div
        layout
        variants={{
          hidden: {
            opacity: 0,
            x: -20,
          },
          show: {
            opacity: 1,
            x: 0,
          },
        }}
        transition={{
          duration: 0.3,
          delay: 2,
        }}
        viewport={{
          once: true,
        }}
        whileInView="show"
        initial="hidden"
        className="max-w-[1200px] mx-auto mb-4"
      >
        <span className="text-secondary-100 text-xs sm:text-sm font-serif! lg:text-lg uppercase inline-block pl-1.5">
          Discover the magic of flower with us
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair text-secondary-100">
          A Dozen Years of Care
        </h2>
      </motion.div> */}

      <motion.div
        variants={{
          show: {
            scale: 1,
            opacity: 1,
            transition: {
              type: "tween",
              duration: 0.6,
              when: "beforeChildren",
              delayChildren: stagger(0.2),
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
        className="relative grid grid-cols-6 sm:grid-cols-12 min-h-[80vh] flex-col sm:flex-row max-w-[1200px] mx-auto w-full gap-12"
      >
        <div className="justify-between flex flex-col col-span-full sm:col-span-6 z-10 gap-8 bg-[#EEE6CE]/0 sm:bg-[#EEE6CE] max-sm:bg-[#EEE6CE]/90">
          <motion.div
            layout
            variants={{
              hidden: {
                opacity: 0,
                x: -20,
              },
              show: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            viewport={{
              once: true,
            }}
            whileInView="show"
            initial="hidden"
            className="max-sm:pb-4 "
          >
            <span className="text-secondary-100 text-xs sm:text-sm font-playfair!  font-light! uppercase inline-block pl-1.5 mb-2">
              Discover the magic of flower with us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-playfair text-secondary-100 mb-4 font-bold">
              ABOUT FLOWERCO
            </h2>
            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                },

                show: {
                  opacity: 1,
                },
              }}
              className="col-span-full md:inline-block text-justify text-sm! sm:text-lg! sm:leading-9! leading-7! text-secondary-100!s font-playfair! backdrop-blur-md py-4 sm:py-6 pr-6"
            >
              Hi, we&apos;re Petal & Co. We don&apos;t just deliver flowers — we
              deliver care. Every bouquet is treated as if it were our own.
              That&apos;s why Henry makes sure your flowers always arrive on
              time. Why Sophia carefully sources distinctive stems just for you.
              And why our Customer Care team goes the extra mile if something
              isn&apos;t perfect. For us, caring means celebrating life&apos;s
              little gestures every day, as well as the big occasions —
              birthdays, anniversaries, and everything in between.
            </motion.p>
          </motion.div>

          <div className="m-1">
            <motion.a
              variants={{
                hidden: {
                  opacity: 0,
                },

                show: {
                  opacity: 1,
                },
              }}
              className="hover:bg-transparent hover:text-secondary-100! hover:border-2 hover:border-secondary-100 cursor-pointer mr-auto inline-block col-span-1 
              bg-secondary-100 p-4 border-2 border-secondary-100 text-[#EEE6CE]! font-bold! transition duration-200 ease-in-out"
            >
              Shop Now
            </motion.a>
          </div>
        </div>

        <div className="inset-y-0 absolute right-0 left-0 sm:left-1/2">
          <video
            preload="auto"
            playsInline
            loop={true}
            autoPlay
            muted
            className=" w-full h-full object-cover rounded-sm"
            src="/flower-3-small.mp4"
          ></video>
        </div>

        <div className="absolute inset-0 bg-[#EEE6CE] opacity-30"></div>
      </motion.div>

      <Divider textClass="top-auto z-10 -bottom-1" />
    </SectionContainer>
  );
}
