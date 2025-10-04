import Image from "next/image";
import { m, motion } from "motion/react";

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
    <motion.div
      whileHover="hover"
      className="rounded-lg! border-secondary-100/10 bg-[#EEE6CE] w-full space-y-2 flex flex-col relative hover:scale-105 transition-all duration-100 hover:shadow-lg"
    >
      <div className=" opacity-80 absolute bg-gradient-to-r from-40% from-purple-700 via-purple-600 via-60%  to-100% to-red-600 top-2 right-2 rounded-4xl z-[15]">
        <span className="text-[9px] text-white font-bold block p-1">
          Double Points
        </span>
      </div>
      <motion.div className="w-full h-44 relative overflow-hidden rounded-t-lg">
        <MotionImage
          src="/flowerforsale1.webp"
          alt="flower"
          objectFit="cover"
          fill={true}
          variants={{
            hover: {
              scale: 1.2,
            },
          }}
          transition={{
            type: "tween",
            ease: "linear",
            duration: 0.1,
          }}
        />
      </motion.div>

      <div className="pt-1 pb-4 px-4 flex gap-5 flex-col justify-between flex-1">
        <div className="space-y-5">
          <div className="space-y-1">
            <div className=" flex justify-between items-end">
              <span className="uppercase text-[9px] font-bold text-secondary-100 text-bold font-serif">
                The rue
              </span>
              <div className="flex items-center gap-1.5 mt-2">
                <div className="flex relative h-4">
                  <img src="/star.svg" />
                  <img src="/star.svg" />
                  <img src="/star.svg" />
                  <img src="/star.svg" />
                </div>
                <span className="ml-2   text-secondary-100  font-normal font-playfair text-sm inline-block ">
                  4.0/5.0
                </span>
              </div>
            </div>
            <h3 className="text-xl! text-secondary-100! font-medium">
              LetterBox Flowers
            </h3>
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
          <motion.button
            whileHover="hover"
            initial="initial"
            className="text-sm! mt-4 text-white font-semibold px-4 py-2 rounded-xs cursor-pointer transition ease-linear hover:border-[0.5px] border-secondary-100 duration-1s00 font-playfair! border-[0.5px] max-sm:self-start bg-secondary-100 relative overflow-hidden"
          >
            <motion.span
              variants={{
                initial: {
                  x: "-100%",
                },
                hover: {
                  x: "100%",
                },
              }}
              transition={{
                duration: 0.3,
              }}
              className="absolute inset-0 bg-linear-to-l from-transparent  via-white to-transparent opacity-40 pointer-events-none"
            ></motion.span>
            View
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
