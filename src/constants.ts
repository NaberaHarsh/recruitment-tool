export const dummyData = [
    {
      "id": "1",
      "jobTitle": "UX UI Designer",
      "industry": "Great Vibes",
      "companyName": "Information Technology",
      "maxExperience": "2",
      "minExperience": "1",
      "location": "Chennai, Tamilnadu, India",
      "remoteType": "In-office",
      "maxSalary": "60000",
      "minSalary": "30000",
      "totalEmployee": "51-200",
      "applyType": "Quick apply",
    },
    {
      "id": "2",
      "jobTitle": "Developer",
      "industry": "Great Vibes",
      "companyName": "Information Technology",
      "maxExperience": "2",
      "minExperience": "1",
      "location": "Chennai, Tamilnadu, India",
      "remoteType": "In-office",
      "maxSalary": "70000",
      "minSalary": "50000",
      "totalEmployee": "51-200",
      "applyType": "External apply",
    },
    {
      "id": "3",
      "jobTitle": "Interaction Designer",
      "industry": "Great Vibes",
      "companyName": "Information Technology",
      "maxExperience": "2",
      "minExperience": "1",
      "location": "Chennai, Tamilnadu, India",
      "remoteType": "In-office",
      "maxSalary": "50000",
      "minSalary": "30000",
      "totalEmployee": "51-200",
      "applyType": "External apply",
    },
    {
      "id": "4",
      "jobTitle": "SEO Analyst",
      "industry": "Great Vibes",
      "companyName": "Information Technology",
      "maxExperience": "2",
      "minExperience": "1",
      "location": "Chennai, Tamilnadu, India",
      "remoteType": "In-office",
      "maxSalary": "50000",
      "minSalary": "30000",
      "totalEmployee": "51-200",
      "applyType": "Quick apply",
    },
  ];   

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
