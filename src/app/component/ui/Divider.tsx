import { motion } from "motion/react";

export default function Divider({ textClass = "" }) {
  return (
    <div
      className={`px-6 absolute flex inset-x-0 top-0 items-center gap-5 ${textClass}`}
    >
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
    </div>
  );
}
