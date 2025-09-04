import Image from "next/image";
import { motion } from "motion/react";

const MotionImage = motion(Image);

// export default function FlowerCard() {
//   return (
//     <div className="border-[0.1px] border-secondary-100/10 bg-[#EEE6CE] w-full h-full min-h-96 shadow-secondary-100/30 shadow-2xl flex flex-col relative rounded-xl">
//       <div className="absolute bg-gradient-to-r from-40% from-purple-700 via-purple-600 via-60%  to-100% to-red-600 top-2 right-2 rounded-4xl z-[15]">
//         <span className="text-[9px] text-white font-bold block p-1">
//           Double Points
//         </span>
//       </div>
//       {/* <div className="absolute inset-0 bg-black z-10 rounded-xl mask-t-from-0%  mask-t-to-40%"></div> */}
//       <div className="w-full h-full relative rounded-xl">
//         <Image
//           src="/flowerforsale1.webp"
//           alt="flower"
//           objectFit="cover"
//           fill={true}
//           className="rounded-xl"
//         />
//       </div>

//       <div className="absolute bottom-2 right-1">
//         <button className="px-8 text-sm! sm:text-lg! text-[#E6E6FF] font-semibold py-1 rounded-lg shadow cursor-pointer hover:bg-[#EEE6CE] bg-purple-800 hover:text-purple-700 transition ease-linear hover:border-[0.5px] hover:border-purple-700 duration-100 font-playfair! border-[0.5px] border-transparent">
//           Buy
//         </button>
//       </div>

//       <div className="hidden pb-1 px-1 flex gap-5 flex-col justify-between flex-1 absolute bottom-0">
//         <div className="space-y-5">
//           <div className="space-y-1">
//             <div>
//               <span className="uppercase text-[8px] font-bold text-secondary-100 text-bold font-serif">
//                 The rue
//               </span>
//               <h3 className="text-xl! text-secondary-100! font-medium">
//                 LetterBox Flowers
//               </h3>
//             </div>

//             <div className="flex items-center gap-1.5">
//               <div className="flex relative h-4">
//                 <img src="/star.svg" />
//                 <img src="/star.svg" />
//                 <img src="/star.svg" />
//                 <img src="/star.svg" />
//               </div>
//               <span className="text-secondary-100/70 font-sans font-medium text-xs inline-block">
//                 4.5/5.0
//               </span>
//             </div>
//           </div>

//           <p className="font-serif! text-secondary-100/80! text-sm!">
//             The Rue LetterBox Flowers bring elegance in a compact package —
//             fresh blooms delivered conveniently through your letterbox.
//           </p>
//         </div>

//         <div className="flex items-end justify-end">
//           {/* <h3 className="text-black! font-serif! text-xl! font-bold!">
//                   $50
//                 </h3> */}
//           <button className="text-sm! sm:text-lg! mt-4 text-[#E6E6FF] font-semibold px-4 py-2 rounded-xs shadow cursor-pointer hover:bg-[#EEE6CE] bg-purple-700 hover:text-purple-700 transition ease-linear hover:border-[0.5px] hover:border-purple-700 duration-1s00 font-playfair! border-[0.5px] border-transparent max-sm:self-start">
//             View
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function FlowerCard() {
  return (
    <div className="border-[0.1px] border-secondary-100/10 bg-[#EEE6CE] w-full h-full min-h-96 space-y-4 flex flex-col relative">
      <div className="absolute bg-gradient-to-r from-40% from-purple-700 via-purple-600 via-60%  to-100% to-red-600 top-2 right-2 rounded-4xl z-[15]">
        <span className="text-[9px] text-white font-bold block p-1">
          Double Points
        </span>
      </div>
      <motion.div className="w-full h-64 relative overflow-hidden">
        <MotionImage
          src="/flowerforsale1.webp"
          alt="flower"
          objectFit="cover"
          fill={true}
          whileHover={{
            scale: 1.2,
          }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        />
      </motion.div>

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
          <button className="text-sm! sm:text-lg! mt-4 text-[#E6E6FF] font-semibold px-4 py-2 rounded-xs shadow cursor-pointer hover:bg-[#EEE6CE] bg-secondary-100 hover:text-secondary-100 transition ease-linear hover:border-[0.5px] hover:border-secondary-100 duration-1s00 font-playfair! border-[0.5px] border-transparent max-sm:self-start">
            View
          </button>
        </div>
      </div>
    </div>
  );
}
