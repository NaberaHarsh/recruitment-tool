import React from "react";
import { ICheckboxProps } from "../types";

const CustomCheckbox = (props: ICheckboxProps) => {
  const {
    name,
    label,
    id,
    htmlFor,
    height = "h-20",
    width = "w-107",
    selectedValue,
    handleChange,
  } = props;
  return (
    <div className={`flex ${height} ${width} gap-1`}>
      <input
        id={id}
        name={name}
        type="checkbox"
        className="h-5 w-5 border-2 border-gray-300"
        checked={selectedValue === label}
        onChange={() => handleChange(name, label)}
      />
      <label
        htmlFor={htmlFor}
        className="text-base font-Poppins leading-20 text-gray-400 text-gray-custom text-sm"
      >
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
