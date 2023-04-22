import React from "react";
import { getLabel } from "../../../shared/helper";

const Switch = ({ val, parentLabel }) => {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        name={getLabel(parentLabel, val?.jsonKey)}
        className="w-4 h-4 cursor-pointer"
      />
      <label htmlFor="" className="text-lg">
        {val?.label}
      </label>
    </div>
  );
};

export default Switch;
