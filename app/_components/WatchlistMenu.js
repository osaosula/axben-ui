"use client";

import {
  ArrowRightTagSolid,
  EditPencil,
  KeyframeAlignHorizontal,
  NavArrowDown,
  NavArrowUp,
  Playlist,
  PlaylistPlay,
  PlaylistPlus,
  Trash,
} from "iconoir-react";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
});

const options = [
  {
    label: "Rename",
    action: () => alert("Rename"),
    icon: <EditPencil className="inline-block h-[15px] w-[15px]" />,
  },
  {
    label: "Clear List",
    action: () => alert("Clear List"),
    icon: <Trash className="inline-block h-[15px] w-[15px]" />,
  },
  {
    label: "Add Section",
    action: () => alert("Add Section"),
    icon: (
      <KeyframeAlignHorizontal className="inline-block h-[15px] w-[15px]" />
    ),
  },
  "divider",
  {
    label: "Create New List",
    action: () => alert("Create New List"),
    icon: <PlaylistPlus className="inline-block h-[15px] w-[15px]" />,
  },
  {
    label: "Duplicate List",
    action: () => alert("Duplicate List"),
    icon: <PlaylistPlus className="inline-block h-[15px] w-[15px]" />,
  },
  "sub-divider",
];

const subOptions = [
  {
    label: "List 1",
    action: () => alert("My list 1"),
    icon: (
      <>
        <Trash className="inline-block h-[15px] w-[15px]" />{" "}
        <EditPencil className="inline-block h-[15px] w-[15px]" />
      </>
    ),
  },
  {
    label: "List 2",
    action: () => alert("My list 2"),
    icon: (
      <>
        <Trash className="inline-block h-[15px] w-[15px]" />{" "}
        <EditPencil className="inline-block h-[15px] w-[15px]" />
      </>
    ),
  },
  {
    label: "List 3",
    action: () => alert("My list 3"),
    icon: (
      <>
        <Trash className="inline-block h-[15px] w-[15px]" />{" "}
        <EditPencil className="inline-block h-[15px] w-[15px]" />
      </>
    ),
  },
];
export default function WatchlistMenu() {
  const [open, setOpen] = useState(false);
  const [hoverSubmenu, setHoverSubmenu] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="bg-transparent text-white text-[15px] font-medium rounded-md focus:outline-none"
      >
        <span
          className={`inline-block align-middle text-left ${inter.className}`}
        >
          Watchlist
        </span>{" "}
        {open ? (
          <NavArrowUp className="inline-block align-middle w-[20px] h-[20px]" />
        ) : (
          <NavArrowDown className="inline-block align-middle w-[20px] h-[20px]" />
        )}
      </button>
      {open && (
        <div className="absolute mt-2 w-[155px] origin-top-right bg-black z-50">
          <div className="py-1 text-white rounded-[10px] border-[#B3AEF5] backdrop-blur-[10px] border-dashed border-[1px]">
            {options.map((item, idx) =>
              item === "divider" ? (
                <div key={idx} className="border-t border-[#B3AEF5] my-1" />
              ) : item === "sub-divider" ? (
                <div
                  key={idx}
                  className="border-t border-[#B3AEF5] border-dashed"
                />
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleAction(item.action)}
                  className={`w-full text-left  gap-[14px] py-1 text-[13px] hover:bg-gray-800 ${inter.className}`}
                >
                  {item.icon} <span className="ml-2">{item.label}</span>
                </button>
              )
            )}

            {/* Submenu item */}
            <div
              className="relative group"
              onMouseEnter={() => setHoverSubmenu(true)}
              onMouseLeave={() => setHoverSubmenu(false)}
            >
              <button
                className={`w-full text-left px-0.5 py-0.5 text-[13px] hover:bg-gray-800 ${inter.className}`}
              >
                <PlaylistPlay className="inline-block h-[15px] w-[15px]" />{" "}
                <span className="ml-2">My Lists</span>
              </button>
              <div className="border-b border-[#B3AEF5] border-dashed " />
              <div className="py-1"></div>
              {hoverSubmenu && (
                <div className="absolute left-full top-0 w-[132px] bg-black border-[#B3AEF5] border-dashed rounded-[10px] border-[1px] shadow-lg z-50">
                  {subOptions.map((subItem) => (
                    <button
                      key={subItem.label}
                      onClick={() => handleAction(subItem.action)}
                      className={`inline-flex items-center justify-between w-full px-1 py-1  text-white hover:bg-gray-800 ${inter.className} text-[13px]`}
                    >
                      <span>{subItem.label}</span> <span>{subItem.icon}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
