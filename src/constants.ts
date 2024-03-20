export const emptyCandidateObject = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  currentStatus: { value: "", label: "Select Value" },
  expectedSalary: "",
  nodeExperience: "",
  reactExperience: "",
};

export const emptyErrorObject = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  currentStatus: "",
  expectedSalary: "",
  nodeExperience: "",
  reactExperience: "",
};

export const currencyStr = "₹";
export const deleteStr = "Delete";
export const editStr = "Edit";
export const addCandidateStr = "Add New Candidate";
export const noCandidateStr = "No Candidate";
export const candidateIDStr = "Candidate ID";
export const emailStr = "Email";
export const phoneNumberStr = "Phone Number";
export const expectedSalaryStr = "Expected Salary";
export const currentStatusStr = "Current Status";
export const scoreStr = "Score";
export const skillsStr = "Skills";
export const nodeJSStr = "Node JS";
export const reactJSStr = "React JS";

export const formatIntegerPartInINR = (amount: number) => {
  const amountStr = Math.floor(amount).toString();
  const formattedIntegerPart = amountStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedIntegerPart;
};

export const statusOptions = [
  { value: "", label: "Select Value" },
  { value: "contacted", label: "Contacted" },
  { value: "interviewScheduled", label: "Interview Scheduled" },
  { value: "hired", label: "Hired" },
  { value: "offerExtended", label: "Offer Extended" },
  { value: "rejected", label: "Rejected" },
];

const yearValue = (experienceValue: string) => {
  switch (experienceValue) {
    case "Less than 1 year":
      return 1;
    case "1 - 2 years":
      return 2;
    case "Over two years":
      return 3;
    default:
      return 0;
  }
};

export const calculateCandidateScore = (expValue: string) => {
  return yearValue(expValue);
};
