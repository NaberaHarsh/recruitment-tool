  
  export const emptyJobObject = {
    id: "", 
    jobTitle: "",
    industry: "",
    companyName: "",
    maxExperience: "",
    minExperience: "",
    location: "",
    remoteType: "",
    maxSalary: "",
    minSalary: "",
    totalEmployee: "",
    applyType: "",
  };

  export const emptyErrorObject = {
    jobTitle: "",
    industry: "",
    companyName: "",
  }

export const applyNowStr = "Apply Now";
export const externalApplyStr = "External Apply"
export const partTimeDescription = 'Part-Time (9.00 am - 5.00 pm IST)';
export const employeesStr = "employees";
export const currentStr = 'INR (₹)';
export const experienceStr = 'Experience';
export const yearsStr = 'years';
export const monthStr = 'Month'


export const formatIntegerPartInINR = (amount : number) => {
  const amountStr = Math.floor(amount).toString();
  const formattedIntegerPart = amountStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return formattedIntegerPart;
}
