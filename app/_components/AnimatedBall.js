import React from "react";

const AnimatedBall = ({
  color,
  width,
  height,
  top,
  left,
  right,
  bottom,
  delay = 0,
}) => {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color,
    borderRadius: "500px",
    position: "absolute",
    animation: `ballAnimation 2.5s infinite alternate ${delay}s`,
    zIndex: 0,
  };

  if (top !== undefined) style.top = `${top}px`;
  if (left !== undefined) style.left = `${left}px`;
  if (right !== undefined) style.right = `${right}px`;
  if (bottom !== undefined) style.bottom = `${bottom}px`;

  return <div style={style} />;
};

export default AnimatedBall;
