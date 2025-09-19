"use client";

import Image from "next/image";
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
    <SectionContainer className="bg-[#FFFBEA] space-y-8 sm:space-y-16">
      <Divider textClass="-top-1!" />
      <div className="max-w-[1200px] bg-gradient-to-r from-0% from-secondary-100 via-40% via-[#624d16] to-100% to-secondary-100 mx-auto min-h-16 p-6 border-[0.1px] w-full shadow-lg shadow-secondary-100/30 border-none">
        <div className="max-w-[800px] mx-auto  border-secondary-100  flex sm:flex-row flex-col justify-between">
          <div className="">
            <span className="text-[#FFFBEA]! text-xs! font-extralight! font-playfair! opacity-80">
              Limited Time Only 🎁
            </span>
            <h3 className="font-playfair! text-sm! sm:text-xl! font-normal! text-[#FFFBEA]! tracking-normal! mt-2">
              Get <span className="text-xl lg:text-4xl font-serif!">$10</span>{" "}
              Off Your First Order With Us
            </h3>
          </div>
          <button className="text-sm! sm:text-lg! mt-4 bg-[#FFFBEA] text-secondary-100 font-semibold px-4 py-2 rounded-xs shadow cursor-pointer hover:bg-[#EEE6CE] hover:text-secondary-100 transition ease-linear hover:border-[0.5px] hover:border-transparent duration-300 font-playfair! border-[0.5px] border-transparent max-sm:self-start">
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
      </div>

      <div className="max-w-[1200px] mx-auto space-y-4 sm:space-y-8">
        <div>
          <h1 className="text-secondary-100! font-bold! mb-4 max-sm:text-3xl!">
            Our Top Flower Picks
          </h1>
          <h2 className="text-secondary-100 text-[16px] font-playfair!  font-light! sm:text-lg inline-block max-w-[900px]">
            For a short time, we’re giving Rewards members double points on
            special blooms, plants and gifts. Go on – care even more wildly.
          </h2>
        </div>

        <div className=" relative shadow-2xl/30 shadow-secondary-100">
          <div className="absolute left-0 w-4 md:w-24 inset-y-0 bg-gradient-to-r from-0% from-[#FFFBEA] to-100% to-transparent z-10"></div>

          <div className="absolute right-0 w-4 md:w-24 inset-y-0 bg-gradient-to-l from-0% from-[#FFFBEA] to-100% to-transparent z-10"></div>

          {/* <div className="absolute inset-x-0 h-6 bg-gradient-to-b from-0% from-[#f4eed5] via-20% via-[#f4eed5] to-100% to-transparent"></div> */}

          <GiArrowMotion
            onClick={scrollLeft}
            layout
            className="max-sm:hidden cursor-pointer duration-100 ease-in-out transition-all hover:scale-110 rotate-135 hover:text-secondary-100 text-secondary-100/50 h-10 w-auto -translate-1/2 absolute inset-y-1/2 z-10"
          />

          <GiArrowMotion
            onClick={scrollRight}
            layout
            className="max-sm:hidden cursor-pointer duration-100 ease-in-out transition-all  hover:scale-110 -rotate-45 hover:text-secondary-100 text-secondary-100/50 h-10 w-auto translate-x-1/2 -translate-y-1/2 absolute inset-y-1/2 z-10 right-0"
          />

          <div
            ref={scrollRef}
            className=" grid grid-flow-col auto-cols-[270px] md:auto-cols-[350px] gap-5 p-8 overflow-x-auto no-scrollbar"
          >
            <FlowerCard />
            <FlowerCard />
            <FlowerCard />
            <FlowerCard />
            <FlowerCard />
            <FlowerCard />
          </div>
        </div>

        <div className=" py-16 overflow-hidden">
          <LogoLoop fadeOutColor="#FFFBEA" />
        </div>
      </div>
    </SectionContainer>
  );
}
