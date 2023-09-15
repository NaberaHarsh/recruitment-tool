import React, { useContext } from "react";
import { JobPortalContext } from "../App";
import CustomBox from "../components/CustomBox";
import CustomContainer from "../components/CustomContainer";
import CustomHeader from "../components/CustomHeader";
import CustomInputfield from "../components/CustomInputfield";
import CustomLabel from "../components/CustomLabel";

const Step1Form = () => {
  const formData: any = useContext(JobPortalContext);
  const { createJobData, handleChange, handleValidate, errors } = formData;
  return (
    <CustomContainer btnText="Next" handleClick={handleValidate}>
      <CustomHeader headerLabel="Create a job" stepCount={1} />
      <CustomBox>
        <CustomLabel
          labelText="Job Title"
          htmlFor="jobTitle"
          isRequired={true}
        />
        <CustomInputfield
          name="jobTitle"
          id="job-title"
          type="text"
          placeholder="ex. UX UI Designer"
          value={createJobData.jobTitle}
          handleChange={handleChange}
          showErrorText={errors.jobTitle}
        />
      </CustomBox>
      <CustomBox>
        <CustomLabel
          labelText="Company name"
          htmlFor="companyName"
          isRequired={true}
        />
        <CustomInputfield
          name="companyName"
          id="Company-name"
          type="text"
          placeholder="ex. Google"
          value={createJobData.companyName}
          handleChange={handleChange}
          showErrorText={errors.companyName}
        />
      </CustomBox>
      <CustomBox>
        <CustomLabel
          labelText="Industry"
          htmlFor="industry"
          isRequired={true}
        />
        <CustomInputfield
          name="industry"
          id="Industry"
          type="text"
          placeholder="ex. Information Technology "
          value={createJobData.industry}
          handleChange={handleChange}
          showErrorText={errors.industry}
        />
      </CustomBox>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <CustomBox width="w-244">
            <CustomLabel labelText="Location" htmlFor="location" />
            <CustomInputfield
              name="location"
              id="Location"
              type="text"
              placeholder="ex. Chennai"
              width="w-244"
              value={createJobData.location}
              handleChange={handleChange}
            />
          </CustomBox>
        </div>
        <div>
          <CustomBox width="w-244">
            <CustomLabel labelText="Remote type" htmlFor="remoteType" />
            <CustomInputfield
              name="remoteType"
              id="Remote-type"
              type="text"
              placeholder="ex. In-office"
              width="w-244"
              value={createJobData.remoteType}
              handleChange={handleChange}
            />
          </CustomBox>
        </div>
      </div>
    </CustomContainer>
  );
};

export default Step1Form;
