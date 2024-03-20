import React, { useContext } from "react";
import CustomCardDescription from "./CustomCardDescription";
import { ICardProps } from "../types";
import CustomButton from "./CustomButton";
import { CandidatePortalContext } from "../App";
import {
  calculateCandidateScore,
  candidateIDStr,
  currencyStr,
  currentStatusStr,
  deleteStr,
  editStr,
  emailStr,
  expectedSalaryStr,
  formatIntegerPartInINR,
  nodeJSStr,
  phoneNumberStr,
  reactJSStr,
  scoreStr,
  skillsStr,
} from "../constants";

const CustomCard = (props: ICardProps) => {
  const formData: any = useContext(CandidatePortalContext);
  const { handleEdit, handleDelete } = formData;

  const {
    id,
    firstName,
    lastName,
    email,
    phone,
    currentStatus,
    expectedSalary,
    nodeExperience,
    reactExperience,
  } = props;

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-300 shadow-md">
      <CustomCardDescription
        height="h-32"
        fontSize="text-xl"
        textAlign="text-center"
      >
        {firstName} {lastName}
      </CustomCardDescription>
      <div className="grid grid-cols-2 mt-2 mb-4">
        <div className="flex flex-col gap-1">
          <CustomCardDescription>{candidateIDStr}</CustomCardDescription>
          <CustomCardDescription>{emailStr} </CustomCardDescription>
          <CustomCardDescription>{phoneNumberStr}</CustomCardDescription>
          <CustomCardDescription>{expectedSalaryStr}</CustomCardDescription>
          <CustomCardDescription>{currentStatusStr}</CustomCardDescription>
          <CustomCardDescription>{scoreStr} </CustomCardDescription>
          <CustomCardDescription>{skillsStr}</CustomCardDescription>
          <CustomCardDescription> </CustomCardDescription>
        </div>

        <div className="flex flex-col gap-1">
          <CustomCardDescription color="text-gray-custom">
            {id}
          </CustomCardDescription>
          <CustomCardDescription color="text-gray-custom">
            {email}
          </CustomCardDescription>
          <CustomCardDescription color="text-gray-custom">
            {phone}
          </CustomCardDescription>
          <CustomCardDescription color="text-gray-custom">
            {currencyStr} {formatIntegerPartInINR(Number(expectedSalary))}
          </CustomCardDescription>
          <CustomCardDescription color="text-gray-custom">
            {currentStatus.label}
          </CustomCardDescription>
          <CustomCardDescription color="text-gray-custom">
            {calculateCandidateScore(nodeExperience) +
              calculateCandidateScore(reactExperience)}
          </CustomCardDescription>
          <CustomCardDescription color="text-gray-custom">
            {nodeJSStr} ({nodeExperience})
          </CustomCardDescription>
          <CustomCardDescription color="text-gray-custom">
            {reactJSStr} ({reactExperience})
          </CustomCardDescription>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <CustomButton
          backgroundColor="bg-error"
          handleClick={() => handleDelete(id)}
        >
          {deleteStr}
        </CustomButton>
        <CustomButton handleClick={() => handleEdit(id)}>
          {editStr}
        </CustomButton>{" "}
      </div>
    </div>
  );
};

export default CustomCard;
