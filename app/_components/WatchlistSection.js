"use client";

import { useState } from "react";
import { NavArrowDown, NavArrowRight } from "iconoir-react";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--fonts-inter",
  subsets: ["latin"],
  weight: ["400"],
});

export default function WatchlistSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`text-white text-[13px] w-fit ${inter.className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center left-[20px] hover:opacity-80"
      >
        {isOpen ? (
          <NavArrowDown className="h-[20px] w-[20px]" />
        ) : (
          <NavArrowRight className="h-[20px] w-[20px]" />
        )}
        <span className="left-[40px]">Section</span>
      </button>

      {isOpen && (
        <div>
          <div>GBP / AUD</div>
        </div>
      )}
    </div>
  );
}
