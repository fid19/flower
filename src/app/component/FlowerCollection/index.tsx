import Image from "next/image";
import SectionContainer from "../ui/SectionContainer";
import { motion } from "motion/react";
import Masonry from "@/components/Masonry";

const items = [
  {
    id: "1",
    img: "https://picsum.photos/id/1015/600/900?grayscale",
    url: "https://example.com/one",
    height: 400,
  },
  {
    id: "2",
    img: "https://picsum.photos/id/1011/600/750?grayscale",
    url: "https://example.com/two",
    height: 250,
  },
  {
    id: "3",
    img: "https://picsum.photos/id/1020/600/800?grayscale",
    url: "https://example.com/three",
    height: 600,
  },
  // ... more items
];

export default function FlowerCollection() {
  return (
    <SectionContainer className="py-36 space-y-18 overflow-hidden">
      {/* <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      /> */}
      <div className="">
        <div className="mx-auto w-fit relative">
          <Image
            src="/purple-flower.png"
            fill
            objectFit="contain"
            alt="purple flower"
            className="absolute max-sm:scale-y-[-1] -bottom-8 -translate-x-1/2 -z-0"
          />

          <Image
            src="/purple-flower.png"
            alt="purple flower"
            fill
            objectFit="contain"
            className="absolute max-sm:scale-y-[-1] -scale-x-100 invert translate-x-1/2 -z-0"
          />
          <h1 className="z-10 relative text-center text-secondary-100! text-3xl! sm:text-4xl!">
            <span className="block uppercase text-4xl! sm:text-8xl font-bold tracking-widest">
              Bloom
            </span>{" "}
            Into The Autumn
          </h1>
        </div>
      </div>
      <div className="relative mx-auto max-w-[1200px]  py-4 px-1">
        <Image
          src="/flowers.webp"
          alt="flower"
          objectFit="cover"
          fill={true}
          className="w-full aspect-video absolute -z-0"
        />
        <div className="relative mb-4">
          <motion.h1
            className="text-center text-secondary-100! cursor-pointer  text-shadow-black/30 font-playfair! font-medium text-3xl! sm:text-4xl!"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            dragTransition={{
              bounceStiffness: 600,
              bounceDamping: 10,
            }}
          >
            Share Well Wishes
          </motion.h1>
          <h2 className="text-secondary-100! text-center text-lg sm:text-xl">
            Say &apos;Get well soon&apos; with this special bouquet flowers.
          </h2>
          <span className="block text-center mt-6">
            <a
              href="#"
              className="bg-amber-200 py-3 px-4 font-semibold text-amber-900"
            >
              Shop More
            </a>
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 auto-cols-fr gap-4 sm:px-12 sm:gap-12">
          {[
            {
              src: "flora1.avif",
              name: "Evergreen Bouqet",
            },
            {
              src: "flora2.avif",
              name: "Bouquet with Roses",
            },
            {
              src: "flora3.avif",
              name: "Basket Full of Wishes",
            },
            {
              src: "flora4.avif",
              name: "Wellness Bouquet",
            },
            {
              src: "flora5.avif",
              name: "How Sweet it is Bouquet",
            },
          ].map((_) => {
            return (
              <div className="relative space-y-2" key={_.src}>
                <img
                  src={`/${_.src}`}
                  className="aspect-squares drop-shadow-2xl"
                />
                <div className="text-center">
                  <a
                    className="text-center! inline-block! bg-amber-300 px-2 py-1 text-amber-900 font-playfair rounded text-sm"
                    href="#"
                  >
                    Buy now
                  </a>
                </div>
                <p className="wrap-normal text-center font-playfair! font-extralight! text-[16px]! sm:text-[18px]!">
                  {_.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1200px]  py-4 px-1">
        <Image
          src="/flowers-1.webp"
          alt="flower"
          objectFit="cover"
          fill={true}
          className="w-full aspect-video absolute -z-0"
        />
        <div className="relative mb-4">
          <motion.h1
            className="text-center text-secondary-100! cursor-pointer  text-shadow-black/30 font-playfair! font-medium text-3xl! sm:text-4xl!"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            dragTransition={{
              bounceStiffness: 600,
              bounceDamping: 10,
            }}
          >
            Share Well Wishes
          </motion.h1>
          <h2 className="text-secondary-100! text-center text-lg sm:text-xl">
            Say &apos;Get well soon&apos; with this special bouquet flowers.
          </h2>
          <span className="block text-center mt-6">
            <a href="#" className="bg-amber-700 py-3 px-4 text-amber-50">
              Shop More
            </a>
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 auto-cols-fr gap-4 sm:px-12 sm:gap-12">
          {[
            {
              src: "flora1.avif",
              name: "Evergreen Bouqet",
            },
            {
              src: "flora2.avif",
              name: "Bouquet with Roses",
            },
            {
              src: "flora3.avif",
              name: "Basket Full of Wishes",
            },
            {
              src: "flora4.avif",
              name: "Wellness Bouquet",
            },
            {
              src: "flora5.avif",
              name: "How Sweet it is Bouquet",
            },
          ].map((_) => {
            return (
              <div className="relative space-y-2" key={_.src}>
                <img
                  src={`/${_.src}`}
                  className="aspect-squares drop-shadow-2xl"
                />
                <div className="text-center">
                  <a
                    className="text-center! inline-block! border border-amber-700 px-2 py-1 text-amber-700 font-playfair rounded text-sm"
                    href="#"
                  >
                    Buy now
                  </a>
                </div>
                <p className="wrap-normal text-center font-playfair! font-extralight! text-[16px]! sm:text-[18px]!">
                  {_.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1200px]  py-12 px-1">
        <Image
          src="/exclusives.webp"
          alt="flower"
          objectFit="cover"
          fill={true}
          className="w-full aspect-video absolute -z-0"
        />
        <div className="relative mb-4">
          <motion.h1
            className="text-center text-secondary-100! cursor-pointer  text-shadow-black/30 font-playfair! font-medium text-3xl! sm:text-4xl!"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            dragTransition={{
              bounceStiffness: 600,
              bounceDamping: 10,
            }}
          >
            Share Well Wishes
          </motion.h1>
          <h2 className="text-secondary-100! text-center text-lg sm:text-xl">
            Say &apos;Get well soon&apos; with this special bouquet flowers.
          </h2>
          <span className="block text-center mt-6">
            <a
              href="#"
              className="bg-purple-700 py-3 px-4 font-semibold text-purple-50"
            >
              Shop More
            </a>
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 auto-cols-fr gap-4 sm:px-12 sm:gap-12">
          {[
            {
              src: "flora1.avif",
              name: "Evergreen Bouqet",
            },
            {
              src: "flora2.avif",
              name: "Bouquet with Roses",
            },
            {
              src: "flora3.avif",
              name: "Basket Full of Wishes",
            },
            {
              src: "flora4.avif",
              name: "Wellness Bouquet",
            },
            {
              src: "flora5.avif",
              name: "How Sweet it is Bouquet",
            },
          ].map((_) => {
            return (
              <div className="relative space-y-2" key={_.src}>
                <img
                  src={`/${_.src}`}
                  className="aspect-squares drop-shadow-2xl"
                />
                <div className="text-center">
                  <a
                    className="text-center! inline-block! border border-purple-700 px-2 py-1 text-purple-700 font-playfair rounded text-sm"
                    href="#"
                  >
                    Buy now
                  </a>
                </div>
                <p className="wrap-normal text-center font-playfair! font-extralight! text-[16px]! sm:text-[18px]!">
                  {_.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
