import React, { useState } from "react";
import { getLabel } from "../../../shared/helper";

const Radio = ({ val, parentLabel, reRender }) => {
  const [radioValue, setRadioValue] = useState(val?.validate?.defaultValue);

  return (
    <div className="">
      <hr />
      <div className="grid grid-cols-2 gap-4 mt-2">
        {val?.validate?.options?.map((option, index) => {
          return (
            <div
              className={`justify-self-center p-2 rounded border cursor-pointer w-full flex ${
                radioValue === option?.value ? "border-blue-600 shadow" : ""
              }  `}
            >
              <label
                htmlFor={""}
                onClick={() => {
                  setRadioValue(option.value);
                  reRender();
                }}
                className="w-full cursor-pointer grow"
              >
                {option.label}
              </label>
              <input
                type="radio"
                value={option?.value}
                name={getLabel(parentLabel, val?.jsonKey)}
                checked={radioValue === option?.value ? "checked" : ""}
                onChange={(e) => {
                  setRadioValue(e.target.value);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Radio;
