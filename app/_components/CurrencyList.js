"use client";

import { useState } from "react";
import { Edit, Trash, NavArrowRight } from "iconoir-react";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "400",
});
const mockData = [
  {
    symbol: "EUR / USD",
    bid: "1.13322",
    ask: "+1.13%",
    spread: "14",
  },
  { symbol: "GBP / AUD", bid: "1.89201", ask: "+0.57%", spread: "14" },
  { symbol: "USD / JPY", bid: "149.021", ask: "-0.22%", spread: "14" },
];

export default function CurrencyList() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className={`text-white ${inter.className}  `}>
      {mockData.map((item, index) => {
        const isSelected = selectedIndex === index;

        return (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`group cursor-pointer transition w-fit py-1 ${
              isSelected ? "relative" : ""
            }`}
          >
            <div className="text-[13px] grid grid-cols-4 gap-[22px] items-center left-[20px]">
              <div className="flex items-center w-[150px] h-[20px]">
                {isSelected && (
                  <NavArrowRight className="w-[20px] h-[20px] mr-1" />
                )}
                {item.symbol}
              </div>

              {isSelected && (
                <>
                  <div className="relative text-[D8CCE8] left-[13px] w-[47px]">
                    {item.bid}
                  </div>
                  <div className="relative left-[27px] text-[#BCF7C0]">
                    {item.ask}
                  </div>
                  <div className="relative left-[42px] hidden sm:inline">
                    {item.spread}
                  </div>
                </>
              )}
            </div>
            {isSelected && (
              <div className="absolute top-[5px] right-[5px] flex space-x-2 opacity-0 group-hover:opacity-95 transition-opacity backdrop-blur-[30px]">
                <Edit
                  className="text-white hover:text-blue-400"
                  width={16}
                  height={16}
                />
                <Trash
                  className="text-white hover:text-red-400"
                  width={16}
                  height={16}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
