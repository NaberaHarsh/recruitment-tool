import React from "react";
import { ILogoImageProps } from "../types";

const CustomImage = (props: ILogoImageProps) => {
  const {
    logoImage,
    height = "h-48",
    width = "w-48",
    borderRadius = "rounded-md",
    altText,
  } = props;

  return (
    <img
      src={logoImage}
      alt={altText}
      className={`${height} ${width} ${borderRadius}`}
    />
  );
};

export default CustomImage;
