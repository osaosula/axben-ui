import AnimatedBall from "./AnimatedBall";

const Button = ({
  text,
  width,
  height,
  hasBackground = true,
  ballsConfig = [],
  withFreeLabel = false,
}) => {
  return (
    <div className="relative">
      <div className="relative w-[173px] h-[71px] flex items-center justify-center">
        {ballsConfig.map((config, index) => (
          <AnimatedBall
            key={index}
            color={config.color}
            width={config.width}
            height={config.height}
            top={config.top}
            left={config.left}
            right={config.right}
            bottom={config.bottom}
            delay={config.delay}
          />
        ))}
        <button
          className={`
            ${hasBackground ? "bg-black/50" : "bg-white/50"} 
            backdrop-blur-md 
            rounded-[30px] 
            text-white
            relative 
            z-20
            text-[13.5px]
          `}
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          {text}
        </button>
      </div>
      {withFreeLabel && (
        <div className="text-[13px] text-white text-center mt-2">
          Forever Free
        </div>
      )}
    </div>
  );
};

export default Button;
