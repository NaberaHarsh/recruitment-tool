import React from "react";
import { IInputProps } from "../types";

const CustomInputfield = (props: IInputProps) => {
  const {
    value,
    handleChange,
    type,
    name,
    id,
    defaultValue,
    placeholder,
    height = "h-9",
    width = "w-513",
    borderRadius = "rounded-md",
    padding = "px-3 py-2",
    gap = "space-x-10",
    border = "border border-gray-300",
    fontSize = "text-sm",
    fontWeight = "font-small",
    lineHeight = "leading-5",
  } = props;

  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className={`outline-none ${height} ${width} ${border} ${borderRadius} ${padding} ${gap} ${fontSize} ${fontWeight} ${lineHeight}`}
      value={value}
      onChange={(e) => handleChange(name, e.target.value)}
    />
  );
};

export default CustomInputfield;
