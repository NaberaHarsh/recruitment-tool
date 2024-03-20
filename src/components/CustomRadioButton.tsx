import React from "react";
import { IRadioProps } from "../types";

const CustomRadioButton = (props: IRadioProps) => {
  const {
    name,
    label,
    id,
    htmlFor,
    height = "h-60",
    width = "w-107",
    selectedValue,
    handleChange,
  } = props;

  return (
    <div className={`flex ${height} ${width} justify-center  gap-1`}>
      <input
        id={id}
        name={name}
        type="radio"
        className="h-4 w-4 border-2 border-gray-300"
        checked={selectedValue === label}
        onChange={() => handleChange(name, label)}
      />
      <label
        htmlFor={htmlFor}
        className="text-base font-Poppins leading-20 text-gray-400 text-gray-custom text-xs"
      >
        {label}
      </label>
    </div>
  );
};

export default CustomRadioButton;
