"use client";

import { navLink } from "@/app/constant/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { hover, motion } from "motion/react";
import { useState } from "react";

const MotionLink = motion(Link);

export default function Navbar() {
  const pathname = usePathname();
  const [hoverItem, setHoverItem] = useState("");
  console.log(hoverItem);
  return (
    // <nav className="p-3 fixed w-full flex flex-row items-end justify-between z-20">
    <nav className="p-4 fixed w-full grid z-20 grid-cols-12 items-end">
      {/* <span></span> */}
      <span className="col-span-6 text-3xl text-[#1F2933] font-roboto font-medium">
        FRAMER
      </span>
      <div className="max-sm:hidden col-span-6">
        <motion.ul className="flex gap-10 item justify-end">
          {navLink.map((_) => (
            <motion.li
              key={_.link}
              onHoverStart={() => setHoverItem(_.link)}
              onHoverEnd={() => setHoverItem("")}
              className={`relative `}
            >
              <Link
                className={`${pathname == _.link ? "font-extrabold" : ""} `}
                href={_.link}
              >
                {_.title}
              </Link>

              {((pathname === _.link && hoverItem === "") ||
                hoverItem === _.link) && (
                <motion.div
                  layoutId="hoverItemNav"
                  style={{}}
                  //   transition={{
                  //     duration: 100,
                  //   }}
                  className="absolute border-[#243B53] border-dotted  border-b-2 inset-x-0 h-0.5 -z-10"
                ></motion.div>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </nav>
  );
}
