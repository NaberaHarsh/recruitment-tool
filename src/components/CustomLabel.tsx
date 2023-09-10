import React from "react";
import { ILabelProps } from "../types";

const CustomLabel = (props: ILabelProps) => {
  const {
    labelText,
    htmlFor,
    isRequired = false,
    fontFamily = "Poppins",
    fontSize = "text-sm",
    fontWeight = "font-medium",
    lineHeight = "leading-5",
    height = "h-20",
    width = "w-64",
    color = "text-dark",
  } = props;

  return (
    <div className={`flex items-center ${height} ${width}`}>
      <label
        htmlFor={htmlFor}
        className={`font-${fontFamily} ${fontSize} ${fontWeight} ${lineHeight} ${color}`}
      >
        {labelText}
      </label>
      {isRequired && <span className="text-error">*</span>}
    </div>
  );
};

export default CustomLabel;
