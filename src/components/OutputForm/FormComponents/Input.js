import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Input = ({ val }) => {
  const isDescriptionValid = () => {
    return val.description.trim() !== "";
  };
  return (
    <>
      <div className="flex gap-4 space-between justify-center items-center px-4">
        <label htmlFor="" className="">
          {val?.label}
          {isDescriptionValid() ? <FontAwesomeIcon icon={faInfoCircle} /> : ""}
        </label>
        <input type="text" className="border-2 outline-none p-2 rounded" />
      </div>
    </>
  );
};

export default Input;
