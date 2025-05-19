"use client";

import { useState, useRef, useEffect } from "react";
import { Plus } from "iconoir-react";
import { Inter } from "next/font/google";
import Widget from "./Widget";
import WatchlistMenu from "./WatchlistMenu";
import WatchlistSection from "./WatchlistSection";
import CurrencyList from "./CurrencyList";
import clsx from "clsx";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Watchlist() {
  const [width, setWidth] = useState(370);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const minWidth = 323;
  const maxWidth = 475;
  const collapsedWidth = 8;
  const collapsedHeight = 105;
  const expandedHeight = 724;

  const isCollapsed = width <= collapsedWidth;

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const left = containerRef.current?.getBoundingClientRect().left || 0;
      const newWidth = e.clientX - left;

      if (newWidth < minWidth) {
        setWidth(collapsedWidth);
      } else if (newWidth >= minWidth && newWidth <= maxWidth) {
        setWidth(newWidth);
      } else if (newWidth > maxWidth) {
        setWidth(maxWidth);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className={clsx(
        "resize-x overflow-hidden absolute text-[#FFFFFF] flex flex-col gap-[5px]",
        inter.className
      )}
      style={{
        width: `${width}px`,
        minWidth: "8px",
        maxWidth: `${maxWidth}px`,
        height: isCollapsed ? `${collapsedHeight}px` : `${expandedHeight}px`,
        top: isCollapsed ? "50%" : "0.125rem",
        transform: isCollapsed ? "translateY(-50%)" : "none",
        left: isCollapsed ? "50%" : "560px",
        backgroundColor: isCollapsed ? "transparent" : "",
      }}
    >
      <div
        className="absolute top-0 right-0 h-full w-[8px] cursor-col-resize"
        onMouseDown={() => setIsDragging(true)}
      >
        {isCollapsed ? (
          <div className="flex h-full items-center justify-center">
            <div className="flex flex-col gap-[3px]">
              <div className="h-[105px] w-[8px] border border-dashed border-black rounded-sm" />
            </div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="w-[2px] h-32 bg-black rounded-full"></div>
          </div>
        )}
      </div>

      {!isCollapsed && (
        <>
          <div className="text-black w-[20px] h-[20px] right-0.5">
            {/*Dark Mode Button*/}
          </div>
          <div
            className={`h-[483px] bg-black rounded-[30px] p-4 flex flex-col gap-[5px]`}
          >
            <div className="flex justify-between items-center mt-[29px] text-[15px]">
              <div className="inline-flex py-1">
                <WatchlistMenu />
              </div>
              <Plus className="w-[20px] h-[20px]" />
            </div>

            <div className="grid grid-cols-4 h-[12px] gap-[76px] text-[10px] align-middle">
              <div>Symbol</div>
              <div>Bid</div>
              <div>Ask</div>
              <div>Spread</div>
            </div>

            <div className="space-y-[5px] text-[13px]">
              <CurrencyList />
            </div>

            <div className="flex items-center">
              <WatchlistSection />
            </div>
          </div>
          <Widget darkMode={false} />
        </>
      )}
    </div>
  );
}
