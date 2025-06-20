import Button from "./Button";
import AnimatedBall from "./AnimatedBall";

const Hero = () => {
  const demoBallsConfig = [
    {
      color: "#D7CBE7",
      width: 30,
      height: 30,
      top: 41,
      left: 35,
      delay: 0.2,
    },
    {
      color: "#EAA879",
      width: 30,
      height: 30,
      top: 37,
      left: 89,
      delay: 0.4,
    },
    {
      color: "#F7BCE9",
      width: 54,
      height: 33,
      top: 21,
      left: 119,
      delay: 0.3,
    },
    {
      color: "#E5C8C8",
      width: 30,
      height: 30,
      top: 8,
      left: 77,
      delay: 0.5,
    },
    {
      color: "#B3AEF5",
      width: 35,
      height: 35,
      top: 0,
      left: 29,
      delay: 0.1,
    },
    {
      color: "#D9D9D9",
      width: 25,
      height: 25,
      top: 25,
      left: 0,
      delay: 0.6,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-8 pt-0 pb-12 min-h-[85vh]">
      <div className="w-[98%] h-[85vh] bg-[#000000] rounded-[30px] flex flex-row items-center justify-center text-center p-8 md:p-16 relative mt-[71px]">
        <div className="flex flex-col items-center gap-3 w-full">
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-[43px] md:text-[43px] bg-gradient-to-r from-[#B3AEF5] via-[#D8CCE8] via-[#E6C8C8] to-[#EBA97A] text-transparent bg-clip-text">
              Welcome to Axben
            </h1>
            <h2 className="text-[13.5px] text-white">
              Go Beyond Limits with Advanced Yet Simplified Trading.
            </h2>
          </div>
          <Button
            text="Try Demo"
            width={166}
            height={45}
            hasBackground={true}
            ballsConfig={demoBallsConfig}
            withFreeLabel={true}
          />
        </div>
        <div className="flex flex-col gap-2 items-center justify-center h-full absolute right-[10px] top-0 bottom-0">
          <div className="w-[5px] h-[5px] rounded-full bg-white" />
          <div className="w-[5px] h-[5px] rounded-full bg-white" />
          <div className="w-[5px] h-[5px] rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
