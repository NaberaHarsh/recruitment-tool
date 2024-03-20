import React from "react";
import { IHeaderProps } from "../types";

const CustomHeader = (props: IHeaderProps) => {
  const { headerLabel } = props;

  return (
    <div>
      <div className="font-Poppins font-medium text-base h-28 w-252 leading-28 text-center">
        {headerLabel}
      </div>
    </div>
  );
};

export default CustomHeader;
