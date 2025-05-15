import { SquareDashed } from "iconoir-react";

export default function Widget() {
  return (
    <div className="bg-black rounded-[30px] p-4 text-white shadow-md">
      <div className="flex items-start justify-between mb-6">
        <div className="flex gap-2">
          <span className="text-white">✨</span>
          <div>
            <div className="text-purple-300 font-medium">Axben AI</div>
            <p className="text-white text-sm">How can I help you today?</p>
            <p></p>
          </div>
        </div>
        <span className="text-white">
          <SquareDashed className="w-[13.33px] h-[13.33px] top-[3.33] left-[3.33px]" />
        </span>
      </div>
      <div className="text-center text-white text-lg">Button Goes Here</div>
    </div>
  );
}
