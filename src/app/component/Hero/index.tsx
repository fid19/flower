"use client";

import { useEffect, useRef, useState } from "react";
import { motion, stagger, useScroll, useTransform } from "motion/react";
import { FlowerAnimation } from "./FlowerAnimation";

const wordShuffle = ["COME ALIVE", "BEAUTIFUL", "WORK"];

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  const [word, setWord] = useState(0);

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
    <div ref={heroRef}>
      <div className="overflow-clip bg-radial-[at_50%_50%] from-10% from-white via-[#EEE6CE] via-70% to -100% to-[#EEE6CE] h-[100vh] sticky top-0">
        <motion.div
          className="mx-auto aspect-square h-full"
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
          <div className="max-sm:row-start-3 max-sm:text-center sm:col-start-2 sm:col-end-7">
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
              className="text-3xl! lg:text-5xl!"
            >
              {"WE MAKE AI".split("").map((letter, i) => {
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
          <motion.div
            variants={{
              hidden: {
                // opacity: 0,
              },
              [`${wordShuffle[word]}-${word}-show`]: {
                // opacity: 1,
              },
              exit: {},
            }}
            initial="hidden"
            animate={showVideo ? `${wordShuffle[word]}-${word}-show` : "hidden"}
            exit="exit"
            className="sm:col-start-9 sm:col-end-13 max-sm:row-start-9 max-sm:text-center text-start grid lg:translate-x-24"
          >
            {wordShuffle.map((single_word, index) => (
              <motion.h1
                key={`${single_word}-${index}`}
                className="text-3xl! lg:text-5xl! row-start-1 col-start-1"
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
            {/* <motion.h1
              variants={{
                hidden: {},
                show: {
                  transition: {
                    delayChildren: stagger(0.1, {
                      from: "center",
                    }),
                  },
                },
                exit: {},
              }}
              animate={showVideo ? "show" : "hidden"}
              initial="hidden"
              exit="exit"
              className="text-3xl! lg:text-5xl! "
            >
              {wordShuffle[word].split("").map((letter, index) => {
                return (
                  <motion.span
                    key={`${letter}-${index}`}
                    variants={{
                      word: {
                        opacity: 0,
                        y: -20,
                      },

                      show: {
                        opacity: 1,
                        y: 0,
                      },

                      exit: {
                        opacity: 0,
                        transition: {
                          delay: 10,
                        },
                      },
                    }}
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </motion.h1> */}
          </motion.div>
        </div>
      </div>

      <section className="h-[300vh] bg-radial-[at_50%_50%] from-30% from-white via-[#EEE6CE] via-70% to-100% to-[#EEE6CE]"></section>
    </div>
  );
}
