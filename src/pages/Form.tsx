import React from "react";
import { IFormProps } from "../types";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";

const Form = (props: IFormProps) => {
  const { stepCount } = props;
  return (
    <div className="flex h-564 w-577 p-8 gap-8 border border-light-gray-300 rounded-lg">
      {stepCount === 1 && <Step1Form />}
      {stepCount === 2 && <Step2Form />}
    </div>
  );
};

export default Form;
