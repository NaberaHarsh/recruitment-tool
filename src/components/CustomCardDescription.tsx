import React from "react";
import { ICardDescription } from "../types";

const CustomCardDescription = (props: ICardDescription) => {
  const {
    children,
    height = "h-20",
    lineHeight = "leading-24",
    fontSize = "text-14",
    fontWeight = "font-normal",
    color = "text-dark",
    fontFamily = "font-Poppins",
    textAlign,
  } = props;

  return (
    <div
      className={` truncate ${lineHeight} ${height} ${fontSize} ${fontWeight} ${color} ${fontFamily} ${textAlign}`}
    >
      {children}
    </div>
  );
};

export default CustomCardDescription;
