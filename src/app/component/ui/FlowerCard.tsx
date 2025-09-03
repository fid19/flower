import Image from "next/image";

export default function FlowerCard() {
  return (
    <div className="border-[0.1px] border-secondary-100/10 bg-[#EEE6CE] w-full h-full min-h-96 shadow-secondary-100/30 shadow-2xl space-y-4 flex flex-col">
      <div className="w-full h-64 relative">
        <Image
          src="/flowerforsale1.webp"
          alt="flower"
          objectFit="cover"
          fill={true}
        />
      </div>

      <div className="pb-1 px-1 flex gap-5 flex-col justify-between flex-1">
        <div className="space-y-5">
          <div className="space-y-1">
            <div>
              <span className="uppercase text-[8px] font-bold text-secondary-100 text-bold font-serif">
                The rue
              </span>
              <h3 className="text-xl! text-secondary-100! font-medium">
                LetterBox Flowers
              </h3>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="flex relative h-4">
                <img src="/star.svg" />
                <img src="/star.svg" />
                <img src="/star.svg" />
                <img src="/star.svg" />
              </div>
              <span className="text-secondary-100/70 font-sans font-medium text-xs inline-block">
                4.5/5.0
              </span>
            </div>
          </div>

          <p className="font-serif! text-secondary-100/80! text-sm!">
            The Rue LetterBox Flowers bring elegance in a compact package —
            fresh blooms delivered conveniently through your letterbox.
          </p>
        </div>

        <div className="flex items-end justify-end">
          {/* <h3 className="text-black! font-serif! text-xl! font-bold!">
                  $50
                </h3> */}
          <button className="text-sm! sm:text-lg! mt-4 text-[#EEE6CE] font-semibold px-4 py-2 rounded-xs shadow cursor-pointer hover:bg-[#EEE6CE] bg-secondary-100 hover:text-secondary-100 transition ease-linear hover:border-[0.5px] hover:border-secondary-100 duration-300 font-playfair! border-[0.5px] border-transparent max-sm:self-start">
            View
          </button>
        </div>
      </div>
    </div>
  );
}
