import React from "react";
import { IBoxProps } from "../types";

const CustomBox = (props: IBoxProps) => {
  const { children, height = "h-60", width = "w-513", gap = "gap-1" } = props;

  return (
    <div className={`flex flex-col ${height} ${width} ${gap}`}>{children}</div>
  );
};

export default CustomBox;
