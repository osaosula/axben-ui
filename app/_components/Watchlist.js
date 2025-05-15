import Image from "next/image";
import { NavArrowDown, NavArrowRight, Plus } from "iconoir-react";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Watchlist() {
  return (
    <div
      className={`w-[370px] h-[483px] bg-black rounded-[30px] p-4 text-white flex flex-col gap-[5px] ${inter.className} leading-[100%] tracking-[0] align-middle`}
    >
      <div className="flex justify-between items-center mt-[29px] left-[19px] text-[15px]">
        <h2 className="flex-nowrap">Watchlist</h2>
        <NavArrowDown />

        <Plus className="w-[20px] h-[20px] " />
      </div>

      <div className="grid grid-cols-4 top-[77px] left-[20px] w-[330px] h-[12px] gap-[76px] text-[10px] align-middle">
        <div>Symbol</div>
        <div>Bid</div>
        <div>Ask</div>
        <div>Spread</div>
      </div>

      <div className="text-white space-y-[5px] text-[13px]">
        <div className="grid grid-cols-4 items-center top-[102px]">
          <div className=" col-span-1 flex items-center  w-[85px] h-[20px] left-[20px] ">
            <NavArrowRight />
            EUR / USD
          </div>
          <div className="relative text-[D8CCE8] left-[13px] w-[47px]">
            1.13322
          </div>
          <div className="relative left-[33px] text-[#BCF7C0]">1.13322</div>
          <div className="relative left-[53px]">14</div>
        </div>

        <div className="left-[20px]">GBP / USD</div>
        <div>GBP / AUD</div>

        <div className="flex items-center top-[191px] left-[40px]">
          <NavArrowRight />
          Section
        </div>
      </div>
    </div>
  );
}
