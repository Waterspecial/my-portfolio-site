"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const WORDS = ["apps", "websites", "products", 'experiences', "solutions" ];

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = WORDS[index];
    const speed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.slice(0, text.length + 1));

        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 900);
        }
      } else {
        setText(currentWord.slice(0, text.length - 1));

        if (text.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % WORDS.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <h2 className="text-4xl lg:text-6xl font-light text-white hidden lg:block mt-8 text-right">
      I BUILD 
      <br/>
      <span className="relative inline-block text-primary uppercase font-bold">
        {text}
        <motion.span
          className="absolute -right-1 top-0 h-full w-0.5 bg-white"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      </span>
    </h2>
  );
}
