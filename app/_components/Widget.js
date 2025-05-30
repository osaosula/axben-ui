import { Import, Maximize, Sparks, SquareDashed } from "iconoir-react";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Widget({ darkMode }) {
  return (
    <div
      className={`h-[236px] rounded-[30px] ${
        darkMode ? "bg-[#141414]" : "bg-black"
      }  p-5 flex flex-col justify-between ${
        inter.className
      } leading-[100%] tracking-[0]`}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-2">
          <span>
            <Sparks className="w-[20px] h-[20px]" />
          </span>
          <div>
            <h2 className="text-[#B3AEF5] text-[15px]">Axben AI</h2>
            <p className="text-white text-[13px] mt-1">
              How can i help you today?
            </p>
          </div>
        </div>
        <Maximize className="w-[13.33px] h-[13.33px] top-[3.33] left-[3.33px]" />
      </div>

      <div className="flex justify-center">
        <button className="text-[15px]">Button Goes Here</button>
      </div>
    </div>
  );
}
