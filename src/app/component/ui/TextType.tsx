"use client";

import { motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

export default function TextType({
  className = "",
  cursorClassName = "",
  cursorCharacter = "_",
  cursorBlinkDuration = 1,
  typingSpeed = 150,
  pauseDuration = 8000,
  deleteSpeed = 100,
  initialDelay = 0,
  startOnVisible = true,
  text = ["Check out this typing tool", "Isn't great?"],
}) {
  const [displayText, setDisplayText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const cursorRef = useRef(null);
  const containerRef = useRef(null);

  const textArray = useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text]
  );

  useEffect(() => {
    if (!startOnVisible) return;
    let timeout: NodeJS.Timeout;

    const currentText = textArray[currentTextIndex];

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayText === "") {
          setIsDeleting(false);

          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayText((prev) => prev.slice(0, -1));
          }, deleteSpeed);
        }
      } else {
        if (currentCharIndex < currentText.length) {
          timeout = setTimeout(() => {
            setDisplayText((prev) => prev + currentText[currentCharIndex]);
            setCurrentCharIndex((prev) => prev + 1);
          }, typingSpeed);
        } else if (textArray.length > 1) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayText === "") {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    typingSpeed,
    currentCharIndex,
    displayText,
    isDeleting,
    pauseDuration,
    textArray,
    currentTextIndex,
    initialDelay,
    startOnVisible,
    deleteSpeed,
  ]);

  return (
    <div className={`inline-block whitespace-pre-wrap ${className}`}>
      <motion.span className="inline">{displayText}</motion.span>
      {startOnVisible && (
        <motion.span
          animate={{
            opacity: 0,
          }}
          initial={{
            opacity: 1,
          }}
          transition={{
            duration: cursorBlinkDuration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className={`ml-1 inline-block opacity-100 ${cursorClassName}`}
        >
          {cursorCharacter}
        </motion.span>
      )}
    </div>
  );
}
