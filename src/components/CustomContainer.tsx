import React from "react";
import { IContainerProps } from "../types";
import CustomButton from "./CustomButton";

const CustomContainer = (props: IContainerProps) => {
  const { children, btnText, handleClick } = props;

  return (
    <div className="flex flex-col h-500 w-513 gap-y-24">
      <div className="flex flex-col h-364 w-513 gap-y-6">{children}</div>
      <div className="flex justify-end h-40 w-513">
        <CustomButton handleClick={handleClick}>{btnText}</CustomButton>
      </div>
    </div>
  );
};

export default CustomContainer;
