"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const WORDS = ["apps", "websites", "products", "experiences", "solutions"];

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = WORDS[index];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      // typing
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 120);
    } else if (!isDeleting && charIndex === currentWord.length) {
      // pause after typing
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 900);
    } else if (isDeleting && charIndex > 0) {
      // deleting
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, 60);
    } else if (isDeleting && charIndex === 0) {
      // move to next word asynchronously to avoid React warning
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % WORDS.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <h2 className="text-4xl lg:text-6xl font-light text-white hidden lg:block mt-8 text-right">
      I BUILD
      <br />
      <span className="relative inline-block text-primary uppercase font-bold">
        {WORDS[index].slice(0, charIndex)}
        <motion.span
          className="absolute -right-1 top-0 h-full w-0.5 bg-white ml-0.5"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      </span>
    </h2>
  );
}
