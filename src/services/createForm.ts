import axios from "axios";
import { recruitmentEndpoint } from "./endpoints";
import { ICandidateListingProps } from "../types";

export const getAvailaibleCandidateList = async () => {
  const response = await axios.get(recruitmentEndpoint);
  return response;
};

export const saveCandidateDetailsForm = (payload: ICandidateListingProps) => {
  axios.post(recruitmentEndpoint, payload);
};

export const updateCandidateDetailsForm = (payload: ICandidateListingProps) => {
  axios.put(`${recruitmentEndpoint}/${payload.id}`, payload);
};

export const deleteCandidate = (candidateID: string) => {
  axios.delete(`${recruitmentEndpoint}/${candidateID}`);
};
