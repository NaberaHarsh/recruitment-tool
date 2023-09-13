import React, { useContext } from "react";
import { JobPortalContext } from "../App";
import CustomBox from "../components/CustomBox";
import CustomContainer from "../components/CustomContainer";
import CustomHeader from "../components/CustomHeader";
import CustomInputfield from "../components/CustomInputfield";
import CustomLabel from "../components/CustomLabel";
import CustomRadioButton from "../components/CustomRadioButton";

const Step2Form = () => {
  const formData: any = useContext(JobPortalContext);
  const { createJobData, handleChange, setStep } = formData;
  return (
    <CustomContainer
      btnText="Save"
      handleClick={() => console.log("createJobData", createJobData)}
    >
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
              value={createJobData.minExperience}
              handleChange={handleChange}
            />
          </div>
          <div>
            <CustomInputfield
              name="maxExperience"
              id="max-Experience"
              type="number"
              placeholder="Maximum"
              width="w-244"
              value={createJobData.maxExperience}
              handleChange={handleChange}
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
              value={createJobData.minSalary}
              handleChange={handleChange}
            />
          </div>
          <div>
            <CustomInputfield
              name="maxSalary"
              id="max-Salary"
              type="number"
              placeholder="Maximum"
              width="w-244"
              value={createJobData.maxSalary}
              handleChange={handleChange}
            />
          </div>
        </div>
      </CustomBox>
      <CustomBox>
        <CustomLabel labelText="Total employee" htmlFor="totalEmployee" />
        <CustomInputfield
          name="totalEmployee"
          id="Total-Employee"
          type="number"
          placeholder="ex. 100"
          value={createJobData.totalEmployee}
          handleChange={handleChange}
        />
      </CustomBox>
      <CustomBox>
        <CustomLabel labelText="Apply type" htmlFor="ApplyType" />
        <div className="grid grid-cols-2 gap-4 py-2 px-0 h-36 w-246">
          <div>
            <CustomRadioButton
              name="applyType"
              id="quick-apply"
              label="Quick apply"
              htmlFor="typeRadioBtn"
              width="w-107"
              selectedValue={createJobData.applyType}
              handleChange={handleChange}
            />
          </div>
          <div>
            <CustomRadioButton
              name="applyType"
              id="external-apply"
              label="External apply"
              htmlFor="typeRadioBtn"
              width="w-123"
              selectedValue={createJobData.applyType}
              handleChange={handleChange}
            />
          </div>
        </div>
      </CustomBox>
    </CustomContainer>
  );
};

export default Step2Form;
