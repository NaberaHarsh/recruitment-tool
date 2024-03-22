import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ISelectInterface } from "../types";

const CustomSelect = (props: ISelectInterface) => {
  const { name, options, selectedOption, handleChange, showErrorText } = props;

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            {selectedOption.label}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {options.map((option: { value: string; label: string }) => (
              <Menu.Item key={option.value}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-100" : "bg-white"
                    } block w-full text-left px-4 py-2 text-sm text-gray-700`}
                    onClick={() => {
                      handleChange(name, option);
                    }}
                  >
                    {option.label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
      {showErrorText && !selectedOption.value && (
        <p className="text-error text-xs ">{showErrorText}</p>
      )}
    </>
  );
};

export default CustomSelect;
