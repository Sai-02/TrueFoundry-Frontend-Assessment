import React from "react";
import FormFieldDescription from "./FormFieldDescription";
import { getLabel } from "../../../shared/helper";

const Input = ({ val, parentLabel }) => {
  const isDescriptionValid = () => {
    return val.description.trim() !== "";
  };
  return (
    <>
      <div className="flex gap-4 space-between justify-center items-center px-4">
        <label htmlFor="" className="flex gap-2 items-center">
          {val?.label}
          {isDescriptionValid() ? (
            <FormFieldDescription description={val.description} />
          ) : (
            ""
          )}
        </label>
        <input
          type="text"
          className="border-2 outline-none p-2 rounded"
          placeholder={val?.placeholder}
          name={getLabel(parentLabel, val?.jsonKey)}
          disabled={val?.validate?.immutable}
        />
      </div>
    </>
  );
};

export default Input;
