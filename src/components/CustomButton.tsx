import React from "react";
import { IButtonProps } from "../types";

const CustomButton = (props: IButtonProps) => {
  const {
    handleClick,
    children,
    height = "h-40",
    width = "w-72",
    borderRadius = "rounded-md",
    padding = "p-2",
    border,
    fontSize = "text-base",
    fontWeight = "font-medium",
    fontFamily = "font-Poppins",
    backgroundColor = "bg-primary",
    color = "text-white",
  } = props;
  return (
    <button
      className={` flex justify-center ${height} ${width} ${borderRadius} ${padding} ${backgroundColor} ${color} ${fontSize} ${fontWeight} ${fontFamily}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
