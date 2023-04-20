import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@mui/material/Tooltip";
import React from "react";

const Input = ({ val }) => {
  const isDescriptionValid = () => {
    return val.description.trim() !== "";
  };
  return (
    <>
      <div className="flex gap-4 space-between justify-center items-center px-4">
        <label htmlFor="" className="flex gap-2 items-center">
          {val?.label}
          {isDescriptionValid() ? (
            <Tooltip title={val.description}>
              <FontAwesomeIcon icon={faInfoCircle} className="cursor-pointer" />
            </Tooltip>
          ) : (
            ""
          )}
        </label>
        <input
          type="text"
          className="border-2 outline-none p-2 rounded"
          placeholder={val?.placeholder}
          name={val?.jsonKey}
        />
      </div>
    </>
  );
};

export default Input;
