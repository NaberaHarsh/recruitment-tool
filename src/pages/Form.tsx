import React, { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";
import CustomButton from "../components/CustomButton";
import { JobPortalContext } from "../App";
import ViewJobs from "./ViewJobs";

const Form = () => {
  const formData: any = useContext(JobPortalContext);
  const { open, setOpen, handleClose, step } = formData;

  return (
    <div className="flex flex-col gap-4">
      <CustomButton handleClick={() => setOpen(true)} width="w-123">
        Create Job
      </CustomButton>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex items-center justify-center z-10 overflow-y-auto"
          onClose={handleClose}
        >
          <div className="fixed inset-0 backdrop-blur-sm backdrop-filter backdrop-saturate-150">
            <div className="bg-gray-600 opacity-50 absolute inset-0"></div>
          </div>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Panel className="bg-white rounded-lg p-8 border border-gray-300 shadow-md">
              {step === 1 && <Step1Form />}
              {step === 2 && <Step2Form />}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
      <ViewJobs />
    </div>
  );
};

export default Form;
