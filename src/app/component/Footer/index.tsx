import { SiFacebook, SiInstagram, SiTwitch } from "react-icons/si";
import SectionContainer from "../ui/SectionContainer";
import Link from "next/link";

export default function Footer() {
  return (
    <SectionContainer className="bg-gradient-to-r from-10% from-secondary-100 via-50% via-[#624d16] to-100% to-secondary-100">
      <div className="max-w-[1200px] mx-auto grid  grid-cols-2 md:grid-cols-4 gap-8 lg:grid-cols-12 lg:gap-4">
        <div className="col-span-full lg:col-span-2">
          <h1 className="text-[#FFFBEA]/90! text-4xl! ">FlowerCo</h1>
        </div>
        <div className="flex gap-3 flex-col col-span-full lg:col-span-2">
          <p className="text-[#FFFBEA]/90! text-sm! font-sans!">
            Email us{" "}
            <span className="text inline-block">
              <Link href="/" className="text-[#FFFBEA]! font-sans! font-bold">
                Here
              </Link>
            </span>
          </p>{" "}
          <div className="font-sans space-x-2">
            <Link href="/" className="inline-block">
              <SiFacebook className="w-6 h-6 text-[#FFFBEA]/90" />
            </Link>
            <Link href="/" className="inline-block">
              <SiInstagram className="w-6 h-6 text-[#FFFBEA]/90" />
            </Link>
            <Link href="/" className="inline-block">
              <SiTwitch className="w-6 h-6 text-[#FFFBEA]/90" />
            </Link>
          </div>
          <div className="flex gap-2 items-center relative">
            <img className="w-20 h-auto" src="/apple-store.svg" />
            <img className="w-20 h-auto" src="/google-store.svg" />
          </div>
        </div>
        <div className="text-[#FFFBEA]/90! flex flex-col gap-3 font-sans">
          <span className="font-bold">About Us</span>
          <Link href="#" className="text-sm ">
            Our Tech Blog
          </Link>
          <Link href="#" className="text-sm ">
            Our Story
          </Link>
          <Link href="#" className="text-sm ">
            Careers
          </Link>
        </div>
        <div className="text-[#FFFBEA]/90! flex flex-col gap-3 font-sans col-span-1 lg:col-span-2">
          <span className="font-bold">Our Flower & Plants</span>
          <Link href="#" className="text-sm ">
            Plant care
          </Link>
          <Link href="#" className="text-sm ">
            Blog
          </Link>
          <Link href="#" className="text-sm ">
            Flower subscriptions
          </Link>
          <Link href="#" className="text-sm ">
            Flower delivery
          </Link>
        </div>
        <div className="text-[#FFFBEA]/90! flex flex-col gap-3 font-sans col-span-1 lg:col-span-2">
          <span className="font-bold">Need help?</span>
          <Link href="#" className="text-sm ">
            Where is my order?
          </Link>
          <Link href="#" className="text-sm ">
            Contact us
          </Link>
          <Link href="#" className="text-sm ">
            Delivery
          </Link>
          <Link href="#" className="text-sm ">
            Recycle your packaging
          </Link>
          <Link href="#" className="text-sm ">
            Reviews
          </Link>
          <Link href="#" className="text-sm ">
            Flower school & tips
          </Link>
          <Link href="#" className="text-sm ">
            Privacy statement
          </Link>
        </div>
        <div className="text-[#FFFBEA]/90! flex flex-col gap-3 font-sans col-span-1 lg:col-span-2">
          <span className="font-bold">Discounts & offers</span>
          <Link href="#" className="text-sm ">
            Keyworker discount
          </Link>
          <Link href="#" className="text-sm ">
            Student & graduate discount
          </Link>
          <Link href="#" className="text-sm ">
            Refer Link friend
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
