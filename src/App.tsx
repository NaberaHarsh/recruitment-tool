import React, { createContext } from "react";
import "./App.css";
import Form from "./pages/Form";
import "./index.css";
import { useState } from "react";
import { dummyData, emptyJobObject } from "./constants";
import { IJobListingProps } from "./types";

export const JobPortalContext = createContext({});

function App() {
  const [jobsData, setJobsData] = useState(dummyData);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<number>(1);
  const [createJobData, setCreateJobData] = useState<IJobListingProps>(
    emptyJobObject
  );

  const handleDelete = (id: number) => {
    const data = [...jobsData];
    const filteredData = data.filter((ele) => ele.id !== id);
    setJobsData(filteredData);
  };

  const handleClose = () => {
    setOpen(false);
    setCreateJobData(emptyJobObject);
  };

  const handleEdit = (id: number) => {
    const data = [...jobsData];
    const filteredData: any = data.find((ele) => ele.id === id);
    setCreateJobData(filteredData);
    setOpen(true);
  };

  const handleChange = (key: string, value: string | number) => {
    const existingJobData: any = { ...createJobData };
    existingJobData[key] = value;
    setCreateJobData(existingJobData);
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
