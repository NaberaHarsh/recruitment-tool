import React from "react";
import CustomBox from "../components/CustomBox";
import CustomContainer from "../components/CustomContainer";
import CustomHeader from "../components/CustomHeader";
import CustomInputfield from "../components/CustomInputfield";
import CustomLabel from "../components/CustomLabel";
import CustomRadioButton from "../components/CustomRadioButton";

const Step2Form = () => {
  return (
    <CustomContainer btnText="Next">
      <CustomHeader headerLabel="Create a job" stepCount={2} />
      <CustomBox>
        <CustomLabel labelText="Experience" htmlFor="Experience" />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <CustomInputfield
              name="minExperience"
              id="min-Experience"
              type="number"
              placeholder="Minimum"
              width="w-244"
            />
          </div>
          <div>
            <CustomInputfield
              name="maxExperience"
              id="max-Experience"
              type="number"
              placeholder="Maximum"
              width="w-244"
            />
          </div>
        </div>
      </CustomBox>
      <CustomBox>
        <CustomLabel labelText="Salary" htmlFor="Salary" />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <CustomInputfield
              name="minSalary"
              id="min-Salary"
              type="number"
              placeholder="Minimum"
              width="w-244"
            />
          </div>
          <div>
            <CustomInputfield
              name="maxSalary"
              id="max-Salary"
              type="number"
              placeholder="Maximum"
              width="w-244"
            />
          </div>
        </div>
      </CustomBox>
      <CustomBox>
        <CustomLabel labelText="Total employee" htmlFor="TotalEmployee" />
        <CustomInputfield
          name="TotalEmployee"
          id="Total-Employee"
          type="number"
          placeholder="ex. 100"
        />
      </CustomBox>
      <CustomBox>
        <CustomLabel labelText="Apply type" htmlFor="ApplyType" />
        <div className="grid grid-cols-2 gap-4 py-2 px-0 h-36 w-246">
          <div>
            <CustomRadioButton
              name="typeRadioBtn"
              id="quick-apply"
              label="Quick apply"
              htmlFor="typeRadioBtn"
              width="w-107"
            />
          </div>
          <div>
            <CustomRadioButton
              name="typeRadioBtn"
              id="external-apply"
              label="External apply"
              htmlFor="typeRadioBtn"
              width="w-123"
            />
          </div>
        </div>
      </CustomBox>
    </CustomContainer>
  );
};

export default Step2Form;
