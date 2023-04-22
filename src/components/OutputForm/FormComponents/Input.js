import React from "react";
import FormFieldDescription from "./FormFieldDescription";
import { getLabel } from "../../../shared/helper";

const Input = ({ val, parentLabel, reRender }) => {
  const isDescriptionValid = () => {
    return val.description.trim() !== "";
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-4   items-center">
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
          onChange={() => {
            reRender();
          }}
        />
      </div>
    </>
  );
};

export default Input;
