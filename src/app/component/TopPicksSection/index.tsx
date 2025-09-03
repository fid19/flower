import Image from "next/image";
import Divider from "../ui/Divider";
import SectionContainer from "../ui/SectionContainer";
import FlowerCard from "../ui/FlowerCard";

export default function () {
  return (
    <SectionContainer className="bg-[#FFFBEA] space-y-16">
      <div className="max-w-[1200px] mx-auto  bg-gradient-to-l from-[#e7dec4] from-5% via-20% via-[#EEE6CE] to-90% to-[#e7dec4] min-h-16 p-6 border-[0.1px] w-full shadow-lg shadow-secondary-100/30 border-none">
        <div className="max-w-[800px] mx-auto  border-secondary-100  flex sm:flex-row flex-col justify-between">
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
            Claim Discount
          </button>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto space-y-12">
        <h1 className="text-secondary-100! font-bold!">Our Top Flower Picks</h1>

        <div className="grid grid-flow-col auto-cols-[270px] gap-5 p-8 overflow-x-auto">
          <FlowerCard />
          <FlowerCard />
          <FlowerCard />
          <FlowerCard />
          <FlowerCard />
          <FlowerCard />
        </div>
      </div>
    </SectionContainer>
  );
}
