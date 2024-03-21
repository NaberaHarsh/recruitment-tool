import React, { createContext } from "react";
import "./App.css";
import Form from "./pages/Form";
import "./index.css";
import { useState } from "react";
import { emptyErrorObject, emptyCandidateObject } from "./constants";
import { IErrorProps, ICandidateListingProps } from "./types";
import {
  deleteCandidate,
  getAvailaibleCandidateList,
  saveCandidateDetailsForm,
  updateCandidateDetailsForm,
} from "./services/createForm";
import { useEffect } from "react";

export const CandidatePortalContext = createContext({});

function App() {
  const [candidatesData, setCandidateData] = useState<ICandidateListingProps[]>(
    []
  );
  const [open, setOpen] = useState(false);

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [
    createCandidateData,
    setCreateCandidateData,
  ] = useState<ICandidateListingProps>(emptyCandidateObject);
  const [errors, setErrors] = useState<IErrorProps>(emptyErrorObject);

  useEffect(() => {
    getCandidateList();
  }, []);

  const handleClose = () => {
    setOpen(false);
    setCreateCandidateData(emptyCandidateObject);
    setErrors(emptyErrorObject);
    setIsEdit(false);
  };

  const handleEdit = (id: string) => {
    const data = [...candidatesData];
    const filteredData: any = data.find((ele) => ele.id === id);

    console.log("filteredData", filteredData);

    setCreateCandidateData(filteredData);
    setOpen(true);
    setIsEdit(true);
  };

  const handleChange = (
    key: string,
    value: string | { label: string; value: string }
  ) => {
    const existingCandidateData: any = { ...createCandidateData };
    existingCandidateData[key] = value;
    setCreateCandidateData(existingCandidateData);
  };

  const handleValidate = () => {
    const errors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      currentStatus: "",
      expectedSalary: "",
      nodeExperience: "",
      reactExperience: "",
    };

    if (!createCandidateData.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!createCandidateData.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!createCandidateData.email) {
      errors.email = "Email is required";
    }
    if (!createCandidateData.phone) {
      errors.phone = "Phone number is required";
    }
    if (!createCandidateData.nodeExperience) {
      errors.nodeExperience = "Node JS Experience is required";
    }
    if (!createCandidateData.reactExperience) {
      errors.reactExperience = "React JS experienceis required";
    }
    if (!createCandidateData.currentStatus.value) {
      errors.currentStatus = "Status is required";
    }
    if (!createCandidateData.expectedSalary) {
      errors.expectedSalary = "Expected Salary is required";
    }
    setErrors(errors);
    if (
      createCandidateData.firstName &&
      createCandidateData.lastName &&
      createCandidateData.email &&
      createCandidateData.phone &&
      createCandidateData.nodeExperience &&
      createCandidateData.reactExperience &&
      createCandidateData.currentStatus.value &&
      createCandidateData.expectedSalary
    ) {
      isEdit ? handleUpdateCandidate() : handleSubmitData();
    }
  };

  const getCandidateList = async () => {
    try {
      const response: any = await getAvailaibleCandidateList();
      setCandidateData(response.data);
    } catch {
      alert("Something went wrong!!");
    }
  };

  const handleSubmitData = async () => {
    try {
      await saveCandidateDetailsForm(createCandidateData);
      alert("Candidate Data Created Successfully !!");
      handleClose();
      getCandidateList();
    } catch {
      alert("Something went wrong!!");
    }
  };

  const handleUpdateCandidate = async () => {
    try {
      await updateCandidateDetailsForm(createCandidateData);
      alert("Candidate Data Updated Successfully !!");
      getCandidateList();
      handleClose();
    } catch {
      alert("Something went wrong!!");
    }
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");

    if (confirmDelete) {
      try {
        await deleteCandidate(id);
        alert("Candidate Data Deleted Successfully !!");
        getCandidateList();
        handleClose();
      } catch {
        alert("Something went wrong!!");
      }
    }
  };

  const contextValue = {
    open,
    setOpen,
    createCandidateData,
    handleChange,
    handleClose,
    candidatesData,
    handleDelete,
    handleEdit,
    handleValidate,
    handleSubmitData,
    handleUpdateCandidate,
    errors,
    isEdit,
  };

  return (
    <div className="p-4">
      <CandidatePortalContext.Provider value={contextValue}>
        <Form />
      </CandidatePortalContext.Provider>
    </div>
  );
}

export default App;
