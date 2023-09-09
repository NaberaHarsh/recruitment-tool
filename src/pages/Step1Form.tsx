import React from "react";
import CustomBox from "../components/CustomBox";
import CustomContainer from "../components/CustomContainer";
import CustomHeader from "../components/CustomHeader";
import CustomInputfield from "../components/CustomInputfield";
import CustomLabel from "../components/CustomLabel";

const Step1Form = () => {
  return (
    <CustomContainer btnText="Next">
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
        />
      </CustomBox>
      <CustomBox>
        <CustomLabel
          labelText="Company name"
          htmlFor="CompanyName"
          isRequired={true}
        />
        <CustomInputfield
          name="CompanyName"
          id="Company-name"
          type="text"
          placeholder="ex. Google"
        />
      </CustomBox>
      <CustomBox>
        <CustomLabel
          labelText="Industry"
          htmlFor="Industry"
          isRequired={true}
        />
        <CustomInputfield
          name="Industry"
          id="Industry"
          type="text"
          placeholder="ex. Information Technology "
        />
      </CustomBox>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <CustomBox width="w-244">
            <CustomLabel labelText="Location" htmlFor="Location" />
            <CustomInputfield
              name="Location"
              id="Location"
              type="text"
              placeholder="ex. Chennai"
              width="w-244"
            />
          </CustomBox>
        </div>
        <div>
          <CustomBox width="w-244">
            <CustomLabel
              labelText="Remote type"
              htmlFor="RemoteType"
              isRequired={true}
            />
            <CustomInputfield
              name="RemoteType"
              id="Remote-type"
              type="text"
              placeholder="ex. In-office"
              width="w-244"
            />
          </CustomBox>
        </div>
      </div>
    </CustomContainer>
  );
};

export default Step1Form;
