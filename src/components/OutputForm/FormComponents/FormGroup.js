import React, { useState } from "react";
import FormRender from "../FormRender";
import Switch from "@mui/material/Switch";

const FormGroup = ({ val, formRef, parentLabel, reRender }) => {
  const [showAdvancedFields, setShowAdvancedFields] = useState(false);
  return (
    <div className="border border-blue-900 p-2">
      <h1 className="mb-2 text-xl font-semibold text-blue-800">{val?.label}</h1>
      <FormRender
        data={val?.subParameters}
        formRef={formRef}
        parentLabel={
          (parentLabel === "" ? "" : parentLabel + ".") + val?.jsonKey
        }
        reRender={reRender}
        showAdvancedFields={showAdvancedFields}
      />
      <div className="flex gap-3 items-center">
        <Switch
          value={showAdvancedFields}
          onClick={() => {
            setShowAdvancedFields(!showAdvancedFields);
          }}
        />
        Show Advanced Fields
      </div>
    </div>
  );
};

export default FormGroup;
