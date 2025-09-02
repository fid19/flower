"use client";

import { navLink } from "@/app/constant/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [hoverItem, setHoverItem] = useState("");

  return (
    // <nav className="p-3 fixed w-full flex flex-row items-end justify-between z-20">
    <div className="top-4 fixed w-full px-2 z-20">
      <nav className="mx-auto px-13 py-2 grid z-20 grid-cols-12  backdrop-blur-xs rounded-full sm:border-[0.5px] border-secondary-100  items-center md:max-w-[1200px]">
        {/* <div className="px-6 absolute flex inset-x-0 -bottom-1 items-center gap-5">
        <motion.div
          whileHover={{
            rotate: 180,
          }}
          transition={{
            duration: 0.3,
          }}
          className="h-2 w-2 text-secondary-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            viewBox="0 0 13 12"
            fill="none"
            className="icon-12px"
          >
            <path
              d="M0.5 6.46154V5.53846H6.03846V0H6.96154V5.53846H12.5V6.46154H6.96154V12H6.03846V6.46154H0.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </motion.div>
        <div className="h-0.5 flex-1 bg-secondary-100/30"></div>
        <motion.div
          whileHover={{
            rotate: 180,
          }}
          transition={{
            duration: 0.3,
          }}
          className="h-2 w-2 text-secondary-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            viewBox="0 0 13 12"
            fill="none"
            className="icon-12px"
          >
            <path
              d="M0.5 6.46154V5.53846H6.03846V0H6.96154V5.53846H12.5V6.46154H6.96154V12H6.03846V6.46154H0.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </motion.div>
      </div> */}

        {/* <div className="px-6 absolute flex inset-x-0 -top-1 items-center gap-5">
        <motion.div
          whileHover={{
            rotate: 180,
          }}
          transition={{
            duration: 0.3,
          }}
          className="h-2 w-2 text-secondary-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            viewBox="0 0 13 12"
            fill="none"
            className="icon-12px"
          >
            <path
              d="M0.5 6.46154V5.53846H6.03846V0H6.96154V5.53846H12.5V6.46154H6.96154V12H6.03846V6.46154H0.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </motion.div>
        <div className="h-0.5 flex-1 bg-secondary-100/30"></div>
        <motion.div
          whileHover={{
            rotate: 180,
          }}
          transition={{
            duration: 0.3,
          }}
          className="h-2 w-2 text-secondary-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            viewBox="0 0 13 12"
            fill="none"
            className="icon-12px"
          >
            <path
              d="M0.5 6.46154V5.53846H6.03846V0H6.96154V5.53846H12.5V6.46154H6.96154V12H6.03846V6.46154H0.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </motion.div>
      </div> */}

        <div className="max-sm:hidden justify-start col-start-1 col-end-5 lg:col-end-4">
          <motion.ul className="flex gap-14 item">
            {navLink.slice(2).map((_) => (
              <motion.li
                key={_.link}
                onHoverStart={() => setHoverItem(_.link)}
                onHoverEnd={() => setHoverItem("")}
                className={`relative`}
                variants={{
                  [hoverItem]: {
                    opacity: [0.3, 1, 0.5, 1],
                  },
                  default: {
                    opacity: 1,
                  },
                }}
                animate={hoverItem === _.link ? hoverItem : "default"}
              >
                <Link
                  // className={`${pathname == _.link ? "font-extrabold" : ""} `}
                  href={_.link}
                >
                  {_.title.toUpperCase()}
                </Link>

                {pathname === _.link && (
                  <motion.div
                    layoutId="hoverItemNav"
                    style={{}}
                    //   transition={{
                    //     duration: 100,
                    //   }}
                    className="absolute border-[#513C06] border-dotted  border-b-2 b-0 inset-x-0 h-0.5 -z-10"
                  ></motion.div>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <span className="col-start-6 col-end-9 sm:col-start-5  text-3xl text-[#513C06] max-sm:text-center max-sm:col-span-full  font-medium text-center font-serif ">
          FlowerCo
        </span>

        <div className="max-sm:hidden col-start-9 col-end-13">
          <motion.ul className="flex gap-14 justify-end">
            {navLink.slice(0, 2).map((_) => (
              <motion.li
                key={_.link}
                onHoverStart={() => setHoverItem(_.link)}
                onHoverEnd={() => setHoverItem("")}
                className={`relative`}
                variants={{
                  [hoverItem]: {
                    opacity: [0.3, 1, 0.5, 1],
                  },
                  default: {
                    opacity: 1,
                  },
                }}
                animate={hoverItem === _.link ? hoverItem : "default"}
              >
                <Link
                  className={`${
                    pathname == _.link ? "text-secondary-100! font-medium!" : ""
                  } `}
                  href={_.link}
                >
                  {_.title.toUpperCase()}
                </Link>
                {/* 
              {pathname === _.link && (
                <motion.div
                  layoutId="hoverItemNav"
                  style={{}}
                  //   transition={{
                  //     duration: 100
                  //   }}
                  className="absolute border-[#513C06]/50 border-dotted  border-b-2 b-0 inset-x-0 h-0.5 -z-10"
                ></motion.div>
              )} */}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </nav>
    </div>
  );
}
