import React, { useContext } from "react";
import { CandidatePortalContext } from "../App";
import CustomBox from "../components/CustomBox";
import CustomContainer from "../components/CustomContainer";
import CustomHeader from "../components/CustomHeader";
import CustomInputfield from "../components/CustomInputfield";
import CustomLabel from "../components/CustomLabel";
import CustomRadioButton from "../components/CustomRadioButton";
import CustomSelect from "../components/CustomSelect";
import { statusOptions } from "../constants";

const CandidateDetailsForm = () => {
  const formData: any = useContext(CandidatePortalContext);
  const {
    createCandidateData,
    handleChange,
    handleValidate,
    errors,
  } = formData;
  return (
    <CustomContainer btnText="Save" handleClick={handleValidate}>
      <CustomHeader headerLabel="Candidate Detail" />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <CustomBox width="w-244">
            <CustomLabel
              labelText="First Name"
              htmlFor="firstName"
              isRequired
            />
            <CustomInputfield
              name="firstName"
              id="first-name"
              type="text"
              placeholder="ex. James"
              width="w-244"
              value={createCandidateData.firstName}
              handleChange={handleChange}
              showErrorText={errors.firstName}
            />
          </CustomBox>
        </div>
        <div>
          <CustomBox width="w-244">
            <CustomLabel labelText="Last Name" htmlFor="lastName" isRequired />
            <CustomInputfield
              name="lastName"
              id="last-name"
              type="text"
              placeholder="ex. Bond"
              width="w-244"
              value={createCandidateData.lastName}
              handleChange={handleChange}
              showErrorText={errors.lastName}
            />
          </CustomBox>
        </div>
      </div>

      <CustomBox>
        <CustomLabel labelText="Email" htmlFor="email" isRequired />
        <CustomInputfield
          name="email"
          id="email"
          type="email"
          placeholder="ex. james@gmail.com"
          value={createCandidateData.email}
          handleChange={handleChange}
          showErrorText={errors.email}
        />
      </CustomBox>
      <CustomBox>
        <CustomLabel labelText="Phone Number" htmlFor="phone" isRequired />
        <CustomInputfield
          name="phone"
          id="phone"
          type="text"
          placeholder="ex. 7766554455"
          value={createCandidateData.phone}
          handleChange={handleChange}
          showErrorText={errors.phone}
        />
      </CustomBox>
      <CustomBox height="20">
        <CustomLabel labelText="Skills" htmlFor="skills" isRequired />
        <div className="grid grid-cols-4 gap-4 py-2 px-0 h-36">
          <div>
            <CustomLabel
              labelText="Node JS"
              htmlFor="nodeJS"
              fontWeight="300"
              height="h-18"
            />
          </div>
          <div>
            <CustomRadioButton
              name="nodeExperience"
              id="less-than-one"
              label="Less than 1 year"
              htmlFor="lessThanOne"
              width="w-123"
              selectedValue={createCandidateData.nodeExperience}
              handleChange={handleChange}
            />
          </div>
          <div>
            <CustomRadioButton
              name="nodeExperience"
              id="one-to-two"
              label="1 - 2 years"
              htmlFor="oneToTwo"
              width="w-123"
              selectedValue={createCandidateData.nodeExperience}
              handleChange={handleChange}
            />
          </div>
          <div>
            <CustomRadioButton
              name="nodeExperience"
              id="over-two-years"
              label="Over two years"
              htmlFor="overTwoYears"
              width="w-123"
              selectedValue={createCandidateData.nodeExperience}
              handleChange={handleChange}
            />
          </div>
        </div>
        {errors.nodeExperience && !createCandidateData.nodeExperience && (
          <p className="text-error text-xs ">{errors.nodeExperience}</p>
        )}
        <div className="grid grid-cols-4 gap-4 py-2 px-0 h-36">
          <div>
            <CustomLabel
              labelText="React JS"
              htmlFor="reactJS"
              fontWeight="300"
              height="h-18"
            />
          </div>
          <div>
            <CustomRadioButton
              name="reactExperience"
              id="less-than-one"
              label="Less than 1 year"
              htmlFor="lessThanOne"
              width="w-123"
              selectedValue={createCandidateData.reactExperience}
              handleChange={handleChange}
            />
          </div>
          <div>
            <CustomRadioButton
              name="reactExperience"
              id="one-to-two"
              label="1 - 2 years"
              htmlFor="oneToTwo"
              width="w-123"
              selectedValue={createCandidateData.reactExperience}
              handleChange={handleChange}
            />
          </div>
          <div>
            <CustomRadioButton
              name="reactExperience"
              id="over-two-years"
              label="Over two years"
              htmlFor="overTwoYears"
              width="w-123"
              selectedValue={createCandidateData.reactExperience}
              handleChange={handleChange}
            />
          </div>
        </div>
        {errors.reactExperience && !createCandidateData.reactExperience && (
          <p className="text-error text-xs ">{errors.reactExperience}</p>
        )}
      </CustomBox>
      <CustomBox>
        <CustomLabel
          labelText="Current Status"
          htmlFor="currentStatus"
          isRequired
        />
        <CustomSelect
          name="currentStatus"
          selectedOption={createCandidateData.currentStatus}
          options={statusOptions}
          handleChange={handleChange}
          showErrorText={errors.currentStatus}
        />
      </CustomBox>
      <CustomBox>
        <CustomLabel
          labelText="Expected Salary"
          htmlFor="expectedSalary"
          isRequired
        />
        <CustomInputfield
          name="expectedSalary"
          id="expectedSalary"
          type="text"
          placeholder="ex. 20,00,000"
          value={createCandidateData.expectedSalary}
          handleChange={handleChange}
          showErrorText={errors.expectedSalary}
        />
      </CustomBox>
    </CustomContainer>
  );
};

export default CandidateDetailsForm;
