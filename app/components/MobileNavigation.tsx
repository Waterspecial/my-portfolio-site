"use client";

import Link from "next/link";
import Image from "next/image";
import CloseIcon from "../icons/CloseIcon";

interface MobileMenuProps {
  open: boolean;
  closeMenu: () => void;
}

export default function MobileNavigation({ open, closeMenu }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="absolute top-0 right-0 left-0 bg-black/90 bg-mobile-dropdown backdrop-blur-sm flex flex-col items-center  text-white text-xl z-40 font-lora">
      {/* Close button */}
      <div className="flex w-full justify-end">
        <div className="p-6" onClick={closeMenu}>
          <CloseIcon />
        </div>
      </div>

      {/* Links */}
      <div className="mt-1.5 flex flex-col items-center gap-3 text-xl">
        <Link className="p-2.5" href="#projects" onClick={closeMenu}>
          Projects
        </Link>
        <Link className="p-2.5" href="#about" onClick={closeMenu}>
          About
        </Link>
        <Link className="p-2.5" href="#contact" onClick={closeMenu}>
          Contact
        </Link>

        {/* Resume & LinkedIn */}
        <div className="flex gap-3 mt-3">
          <Link className="py-1 px-2.5" href="/resume.pdf" onClick={closeMenu}>
            RESUME
          </Link>
          <Link
            className="py-1 px-2.5"
            href="https://linkedin.com"
            onClick={closeMenu}
          >
            LINKEDIN
          </Link>
        </div>

        {/* Logo Image */}
        <Image
          className="mt-20"
          src="/images/OMIRINDE.webp"
          alt="Omirinde"
          width={384}
          height={55}
        />
      </div>
    </div>
  );
}
