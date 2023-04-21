import React from "react";
import FormFieldDescription from "./FormFieldDescription";
const Select = ({ val }) => {
  const isDescriptionValid = () => {
    return val.description.trim() !== "";
  };
  return (
    <div className="flex gap-4 space-between justify-center items-center px-4">
      <label htmlFor={val.jsonKey} className="flex gap-2 items-center">
        {val?.label}
        {isDescriptionValid() ? (
          <FormFieldDescription description={val.description} />
        ) : (
          ""
        )}
      </label>
      <select
        className="border-2 outline-none p-2 rounded"
        placeholder={val?.placeholder}
        name={val?.jsonKey}
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
