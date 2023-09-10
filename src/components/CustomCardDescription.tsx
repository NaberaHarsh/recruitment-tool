import React from "react";
import { ICardDescription } from "../types";

const CustomCardDescription = (props: ICardDescription) => {
  const {
    children,
    height = "h-24",
    lineHeight = "leading-24",
    fontSize = "text-base",
    fontWeight = "font-normal",
    color = "text-dark",
    fontFamily = "font-Poppins",
  } = props;

  return (
    <div
      className={` ${lineHeight} ${height} ${fontSize} ${fontWeight} ${color} ${fontFamily}`}
    >
      {children}
    </div>
  );
};

export default CustomCardDescription;
