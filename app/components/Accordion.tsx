"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayIcon } from "../icons/PlayIcon";
import { ListIcon } from "../icons/ListIcon";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-project-section-custom w-full rounded-[15px] border-[1.5px] border-[#333333] cursor-pointer mt-5 font-satoshi"
      onClick={() => setOpen(!open)}
    >
      <div className={`flex justify-between items-center py-4 px-6 ${ open && 'border-b-[1.5px] border-[#333333]'}`}>
        <div className="flex items-center gap-3">
          {open ? (
            <ListIcon />
          ) : (
            <PlayIcon />
          )}
          <span className="text-[#EBEBEB] ">{title}</span>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="text-[#CCCCCC] leading-relaxed p-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
