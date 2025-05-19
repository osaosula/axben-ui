"use client";
import { Plus } from "iconoir-react";
import { Inter } from "next/font/google";
import Widget from "./Widget";
import WatchlistMenu from "./WatchlistMenu";
import WatchlistSection from "./WatchlistSection";
import CurrencyList from "./CurrencyList";
import { useState } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Watchlist() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={`resize-x overflow-auto absolute top-0.5 left-[560px] w-[370px] min-w-[323px] max-w-[475px] h-[724px] text-[#FFFFFF] flex flex-col gap-[5px] ${inter.className} leading-[100%] tracking-[0] align-middle`}
    >
      <div className="text-black w-[20px] h-[20px] right-0.5">
        {/*Dark Mode Button*/}
      </div>
      <div
        className={`h-[483px] ${
          darkMode ? "bg-[#141414]" : "bg-black"
        } rounded-[30px] p-4 flex flex-col gap-[5px]`}
      >
        <div className="flex justify-between items-center mt-[29px] left-[19px] text-[15px]">
          <div className="inline-flex py-1">
            <WatchlistMenu />
          </div>

          <Plus className="w-[20px] h-[20px] " />
        </div>

        <div className="grid grid-cols-4 top-[77px] left-[20px] h-[12px] gap-[76px] text-[10px] align-middle">
          <div>Symbol</div>
          <div>Bid</div>
          <div>Ask</div>
          <div>Spread</div>
        </div>

        <div className="space-y-[5px] text-[13px]">
          <CurrencyList />
        </div>
        <div className="flex items-center top-[189px] left-[40px]">
          <WatchlistSection />
        </div>
      </div>
      <Widget darkMode={darkMode} />
    </div>
  );
}
