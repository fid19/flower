"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  stagger,
  useScroll,
  useTransform,
} from "motion/react";
import { FlowerAnimation } from "./FlowerAnimation";
import TextType from "../ui/TextType";
import { wordShuffle } from "@/app/constant/constant";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  const [word, setWord] = useState(0);

  useEffect(() => {}, []);

  useEffect(() => {
    const wordPlay = setInterval(() => {
      if (showVideo) {
        setWord((w) => {
          return (w + 1) % wordShuffle.length;
        });
      }
    }, 8000);

    return () => clearInterval(wordPlay);
  }, [showVideo]);

  return (
    <div
      className="pb-12 overflow-clip bg-radial-[at_50%_50%] from-10% from=[#FFFAEB] via-[#EEE6CE] via-70% to -100% to-[#EEE6CE]"
      ref={heroRef}
    >
      <div className="h-[100vh] sticky top-0">
        <motion.div
          className="mx-auto w-full sm:w-auto sm:aspect-square h-full"
          style={{
            rotate,
            scale: scale,
          }}
        >
          <FlowerAnimation showVideo={showVideo} setShowVideo={setShowVideo} />
        </motion.div>

        <div
          className="absolute grid sm:grid-cols-13 
      max-sm:grid-cols-1
      max-sm:grid-rows-12 h-full w-full top-0 items-center"
        >
          <div className="max-sm:row-start-3 max-sm:text-center sm:col-start-2 sm:col-end-6 text-end">
            <motion.h1
              variants={{
                hidden: {},
                show: {
                  transition: {
                    delayChildren: stagger(0.1),
                  },
                },
              }}
              animate="show"
              initial="hidden"
              className="text-3xl! font-playfair lg:text-5xl! text-secondary-100! whitespace-nowrap"
            >
              {"EVERY FLOWER".split("").map((letter, i) => {
                return (
                  <motion.span
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: -20,
                      },
                      show: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    key={`${letter}-${i}`}
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </motion.h1>
          </div>

          <TextType
            text={wordShuffle}
            className="sm:col-start-9 sm:col-end-13 max-sm:row-start-9 text-start grid  text-3xl! max-sm:text-center lg:text-5xl! text-secondary-100! font-playfair whitespace-nowrap!"
            startOnVisible={showVideo}
          />

          {/* <motion.div
            variants={{
              hidden: {
              },
              [`${wordShuffle[word]}-${word}-show`]: {
                
              },
              exit: {},
            }}
            initial="hidden"
            animate={showVideo ? `${wordShuffle[word]}-${word}-show` : "hidden"}
            exit="exit"
            className="sm:col-start-8 sm:col-end-13 max-sm:row-start-9 max-sm:text-center text-start grid lg:translate-x-24"
          >
            {wordShuffle.map((single_word, index) => (
              <motion.h1
                key={`${single_word}-${index}`}
                className="text-3xl! lg:text-5xl! row-start-1 col-start-1 text-secondary-100! font-serif!"
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  [`${single_word}-${index}-show`]: {
                    opacity: 1,
                    transition: {
                      delayChildren: stagger(0.1),
                    },
                  },
                }}
              >
                {single_word.split("").map((letter, _) => (
                  <motion.span
                    variants={{
                      hidden: {
                        y: -20,
                        opacity: 0,
                      },
                      [`${single_word}-${index}-show`]: {
                        y: 0,
                        opacity: 1,
                      },
                    }}
                    key={`${single_word}-${letter}-${_}`}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>
            ))}
          </motion.div> */}
        </div>

        <motion.div
          layout
          className="absolute bottom-5 left-1/2 -translate-1/2  bg-secondary-100/50 z-20 p-1 flex items-center gap-2"
        >
          {showVideo ? (
            <>
              <motion.div
                layout
                animate={{
                  y: -2,
                }}
                initial={{
                  y: 2,
                }}
                transition={{
                  repeatType: "reverse",
                  repeat: Infinity,
                  duration: 0.4,
                  ease: "linear",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="100%"
                  viewBox="0 0 13 13"
                  fill="none"
                  className="w-2 h-2 inline-block rotate-90"
                >
                  <path
                    d="M7.40002 4.40039L11.4 8.40039L7.40002 12.4004"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeMiterlimit="10"
                  ></path>
                  <path
                    d="M1 0V6V8.4H11.4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeMiterlimit="10"
                  ></path>
                </svg>
              </motion.div>
              <span className="text-[10px] my-auto! inline-block font-medium font-sans">
                SCROLL DOWN
              </span>
            </>
          ) : (
            <>
              <motion.span
                layout
                layoutId="scrollDown"
                className="text-[10px] my-auto! inline-block font-medium p-1 font-sans"
              >
                LOADING...
              </motion.span>
            </>
          )}
        </motion.div>
      </div>

      <section className="h-[300vh]"></section>
    </div>
  );
}
