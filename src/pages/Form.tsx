import React, { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CandidateDetailsForm from "./CandidateDetailsForm";
import CustomButton from "../components/CustomButton";
import { CandidatePortalContext } from "../App";
import ViewCandidate from "./ViewCandidate";
import { addCandidateStr } from "../constants";

const Form = () => {
  const formData: any = useContext(CandidatePortalContext);
  const { open, setOpen, handleClose, step } = formData;

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        <CustomButton handleClick={() => setOpen(true)}>
          {addCandidateStr}
        </CustomButton>
      </div>
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
              <CandidateDetailsForm />
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
      <ViewCandidate />
    </div>
  );
};

export default Form;
