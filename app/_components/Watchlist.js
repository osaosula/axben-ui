import Image from "next/image";
import { NavArrowRight, Plus } from "iconoir-react";
import { Inter } from "next/font/google";
import Widget from "./Widget";
import WatchlistMenu from "./WatchlistMenu";
import WatchlistSection from "./WatchlistSection";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Watchlist() {
  return (
    <div
      className={`resize-x overflow-auto absolute top-0.5 left-[560px] w-[370px] min-w-[323px] max-w-[475px] h-[724px] text-[#FFFFFF] flex flex-col gap-[5px] ${inter.className} leading-[100%] tracking-[0] align-middle`}
    >
      <div
        className={`h-[483px] bg-black rounded-[30px] p-4 flex flex-col gap-[5px]`}
      >
        <div className="flex justify-between items-center mt-[29px] left-[19px] text-[15px]">
          <div className="inline-flex">
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
          <div className="grid grid-cols-4 gap-[22px] items-center top-[102px]">
            <div className=" col-span-1 flex items-center  w-[85px] h-[20px] left-[20px] ">
              <NavArrowRight />
              EUR / USD
            </div>
            <div className="relative text-[D8CCE8] left-[13px] w-[47px]">
              1.13322
            </div>
            <div className="relative left-[27px] text-[#BCF7C0]">1.13322</div>
            <div className="relative left-[42px]">14</div>
          </div>

          <div className="left-[20px]">GBP / USD</div>
          <div>GBP / AUD</div>

          <div className="flex items-center top-[191px] left-[40px]">
            <WatchlistSection />
          </div>
        </div>
      </div>
      <Widget />
    </div>
  );
}
