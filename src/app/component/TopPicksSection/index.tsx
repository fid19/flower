"use client";

import { GiBroadheadArrow } from "react-icons/gi";
import Divider from "../ui/Divider";
import SectionContainer from "../ui/SectionContainer";
import FlowerCard from "../ui/FlowerCard";
import LogoLoop from "../LoopingLogos";
import { motion } from "motion/react";
import { useRef } from "react";

const GiArrowMotion = motion(GiBroadheadArrow);

export default function TopPicksSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" }); // scroll left
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" }); // scroll right
  };

  return (
    <SectionContainer className="bg-[#FFFBEA] space-y-16">
      <Divider textClass="-top-1!" />
      <motion.div
        animate={{
          background: [
            "linear-gradient(to-right,rgba(81, 60, 6, 1) 0%, rgba(134, 118, 77, 1) 40%, rgba(81, 60, 6, 0.9) 100%)",

            "linear-gradient(to right,rgba(81, 60, 6, 1) 0%, rgba(134, 118, 77, 1) 50%, rgba(81, 60, 6, 1) 100%)",

            "linear-gradient(to right,rgba(81, 60, 6, 1) 0%, rgba(134, 118, 77, 1) 50%, rgba(134, 118, 77, 1) 100%)",

            "linear-gradient(to right,rgba(134, 118, 77, 1) 0%, rgba(134, 118, 77, 1) 50%, rgba(81, 60, 6, 1) 100%);",

            "linear-gradient(to-right,rgba(81, 60, 6, 1) 0%, rgba(134, 118, 77, 1) 40%, rgba(81, 60, 6, 0.9) 100%)",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
          repeatDelay: 0,
        }}
        className="max-w-[1200px] mx-auto border-[0.1px] w-full border-none relative"
      >
        <div
          className="absolute bg-[url(/yellow-flower.png)] bg-cover bg-center bg-no-repeat  inset-y-0 left-0 right-0 bg-blend-overlay bg-black/50 opacity-50"
          style={
            {
              // clipPath: "polygon(15% 0, 100% 0%, 100% 100%, 10% 100%)",
            }
          }
        ></div>
        <div className="max-w-[800px] mx-auto p-6 sm:py-6! border-secondary-100 max-sm:space-y-4 flex flex-col sm:flex-row justify-between">
          <div className="">
            <span className="text-[#FFFBEA]! text-xs! font-extralight! font-playfair! opacity-80 relative flex items-center gap-1">
              Limited Time Only{" "}
              {/* <Image
                alt="flower"
                src="/bouquet.gif"
                width={32}
                height={32}
                quality={10}
                className=""
              /> */}
            </span>
            <h3 className="font-playfair! text-xl! sm:text-2xl! text-[#FFFBEA]! opacity-90! font-medium mt-1">
              Get <span className="text-xl lg:text-4xl font-serif">$10</span>{" "}
              Off Your First Order With Us
            </h3>
          </div>
          <button className="text-md! sm:text-lg! bg-[#FFFBEA] text-secondary-100 font-semibold px-4 py-2 rounded-xs shadow cursor-pointer! hover:bg-[#EEE6CE] hover:text-secondary-100 transition ease-linear hover:border-[0.5px] hover:border-transparent duration-300 font-playfair! border-[0.5px] border-transparent max-sm:self-start sm:items-center z-10">
            Claim Offer
          </button>
        </div>
        {/* <div className="max-w-[800px] mx-auto  border-secondary-100  flex sm:flex-row flex-col justify-between">
          <div className="">
            <span className="text-secondary-100! text-xs! font-extralight! font-playfair! opacity-80">
              Limited Time Only 🎁
            </span>
            <h3 className="font-playfair! text-sm! sm:text-xl! font-normal! text-secondary-100! tracking-normal! mt-2">
              Get <span className="text-4xl font-serif!">$10</span> Off Your
              First Order With Us
            </h3>
          </div>
          <button className="text-sm! sm:text-lg! mt-4 sm:mt-  bg-secondary-100 text-[#EEE6CE] font-semibold px-4 py-2 rounded-xs shadow cursor-pointer hover:bg-[#EEE6CE] hover:text-secondary-100 transition ease-linear hover:border-[0.5px] hover:border-secondary-100 duration-300 font-playfair! border-[0.5px] border-transparent max-sm:self-start">
            Claim Offer
          </button>
        </div> */}
      </motion.div>

      <div className="max-w-[1200px] mx-auto space-y-4">
        <div>
          <h1 className="text-secondary-100! font-bold! mb-3 max-sm:text-4xl!">
            Our Top Flower Picks
          </h1>
          <h2 className="text-secondary-100 text-[16px] font-serif!  font-extralight! text-lg! sm:text-xl! inline-block">
            For a short time, we’re giving Rewards members double points on
            special blooms, plants and gifts. Go on – care even more wildly.
          </h2>
        </div>

        <div className="pt-8 relative shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]">
          <div className="absolute left-0 w-4 md:w-24 inset-y-0 bg-gradient-to-r from-0% from-[#FFFBEA] to-100% to-transparent z-10"></div>

          <div className="absolute right-0 w-4 md:w-24 inset-y-0 bg-gradient-to-l from-0% from-[#FFFBEA] to-100% to-transparent z-10"></div>

          {/* <div className="absolute inset-x-0 h-6 bg-gradient-to-b from-0% from-[#f4eed5] via-20% via-[#f4eed5] to-100% to-transparent"></div> */}

          <GiArrowMotion
            onClick={scrollLeft}
            layout
            className="max-sm:w-6 max-sm:-translate-x-1 max-sm:opacity-70 cursor-pointer duration-100 ease-in-out transition-all hover:scale-110 rotate-135 hover:text-secondary-100 text-secondary-100/50 h-10 w-auto -translate-1/2 absolute inset-y-1/2 z-10"
          />

          <GiArrowMotion
            onClick={scrollRight}
            layout
            className="max-sm:w-6 max-sm:translate-x-1 max-sm:opacity-70 cursor-pointer duration-100 ease-in-out transition-all  hover:scale-110 -rotate-45 hover:text-secondary-100 text-secondary-100/50 h-10 w-auto translate-x-1/2 -translate-y-1/2 absolute inset-y-1/2 z-10 right-0"
          />

          <div
            ref={scrollRef}
            className="grid grid-flow-col auto-cols-[270px] md:auto-cols-[290px] gap-8 p-8 sm:px-12 overflow-x-auto no-scrollbar"
          >
            <FlowerCard />
            <FlowerCard />
            <FlowerCard />
            <FlowerCard />
            <FlowerCard />
            <FlowerCard />
          </div>
        </div>

        <div className=" py-8 overflow-hidden">
          <LogoLoop fadeOutColor="#FFFBEA" />
        </div>
      </div>
    </SectionContainer>
  );
}
