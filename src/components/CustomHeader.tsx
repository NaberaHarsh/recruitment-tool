import React from "react";
import { IHeaderProps } from "../types";

const CustomHeader = (props: IHeaderProps) => {
  const { headerLabel, stepCount } = props;

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="font-Poppins font-normal text-base h-28 w-252 leading-28">
        {headerLabel}
      </div>
      <div className="font-Poppins font-medium text-right text-base h-24 w-252 leading-24">
        Step {stepCount}
      </div>
    </div>
  );
};

export default CustomHeader;
