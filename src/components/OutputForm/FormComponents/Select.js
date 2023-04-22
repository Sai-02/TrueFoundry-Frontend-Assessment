import React from "react";
import FormFieldDescription from "./FormFieldDescription";
import { getLabel } from "../../../shared/helper";

const Select = ({ val, parentLabel }) => {
  const isDescriptionValid = () => {
    return val.description.trim() !== "";
  };
  return (
    <div className="grid  gap-4 grid-cols-2 items-center">
      <label htmlFor={val.jsonKey} className="flex gap-2 items-center">
        {val?.label}
        {isDescriptionValid() ? (
          <FormFieldDescription description={val.description} />
        ) : (
          ""
        )}
      </label>
      <select
        className="border-2 outline-none p-2 px-4 rounded"
        placeholder={val?.placeholder}
        name={getLabel(parentLabel, val?.jsonKey)}
        disabled={val?.validate?.immutable}
        defaultValue={val?.validate?.defaultValue}
      >
        {val?.validate?.options?.map((option) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
