import React from "react";
import { IContainerProps } from "../types";

const CustomContainer = (props: IContainerProps) => {
  const { children, btnText } = props;

  return (
    <div className="flex flex-col h-500 w-513 gap-y-24">
      <div className="flex flex-col h-364 w-513 gap-y-6">{children}</div>
      <div className="flex justify-end h-40 w-513">
        <button className="h-40 w-72 rounded-md p-2 bg-blue-500 text-white text-base font-medium font-Poppins">
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default CustomContainer;
