import React, { createContext } from "react";
import "./App.css";
import Form from "./pages/Form";
import "./index.css";
import { useState } from "react";
import { emptyErrorObject, emptyJobObject } from "./constants";
import { IErrorProps, IJobListingProps } from "./types";
import {
  deleteJob,
  getAvailaibleJobList,
  saveJobDetailsForm,
  updateJobDetailsForm,
} from "./services/createForm";
import { useEffect } from "react";

export const JobPortalContext = createContext({});

function App() {
  const [jobsData, setJobsData] = useState<IJobListingProps[]>([]);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<number>(1);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [createJobData, setCreateJobData] = useState<IJobListingProps>(
    emptyJobObject
  );
  const [errors, setErrors] = useState<IErrorProps>(emptyErrorObject);

  useEffect(() => {
    getJobList();
  }, []);

  const handleClose = () => {
    setOpen(false);
    setCreateJobData(emptyJobObject);
    setStep(1);
    setIsEdit(false);
  };

  const handleEdit = (id: string) => {
    const data = [...jobsData];
    const filteredData: any = data.find((ele) => ele.id === id);
    setCreateJobData(filteredData);
    setOpen(true);
    setIsEdit(true);
  };

  const handleChange = (key: string, value: string) => {
    const existingJobData: any = { ...createJobData };
    existingJobData[key] = value;
    setCreateJobData(existingJobData);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleValidate = () => {
    const errors = {
      jobTitle: "",
      industry: "",
      companyName: "",
    };

    if (!createJobData.jobTitle) {
      errors.jobTitle = "Job title is required";
    }
    if (!createJobData.industry) {
      errors.industry = "Industry is required";
    }
    if (!createJobData.companyName) {
      errors.companyName = "Company name is required";
    }
    setErrors(errors);
    if (
      createJobData.jobTitle &&
      createJobData.industry &&
      createJobData.companyName
    ) {
      handleNext();
    }
  };

  const getJobList = async () => {
    try {
      const response: any = await getAvailaibleJobList();
      setJobsData(response.data);
    } catch {
      alert("Something went wrong!!");
    }
  };

  const handleSubmitData = async () => {
    try {
      await saveJobDetailsForm(createJobData);
      alert("Job Created Successfully !!");
      handleClose();
      getJobList();
    } catch {
      alert("Something went wrong!!");
    }
  };

  const handleUpdateJob = async () => {
    try {
      await updateJobDetailsForm(createJobData);
      alert("Job Updated Successfully !!");
      getJobList();
      handleClose();
    } catch {
      alert("Something went wrong!!");
    }
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");

    if (confirmDelete) {
      try {
        await deleteJob(id);
        alert("Job Deleted Successfully !!");
        getJobList();
        handleClose();
      } catch {
        alert("Something went wrong!!");
      }
    }
  };

  const handleApply = () => {
    alert("Thanks For Applying !!");
  };

  const contextValue = {
    open,
    setOpen,
    step,
    setStep,
    createJobData,
    handleChange,
    handleClose,
    jobsData,
    handleDelete,
    handleEdit,
    handleValidate,
    handleSubmitData,
    handleUpdateJob,
    handleApply,
    errors,
    isEdit,
  };

  return (
    <div className="p-4">
      <JobPortalContext.Provider value={contextValue}>
        <Form />
      </JobPortalContext.Provider>
    </div>
  );
}

export default App;
