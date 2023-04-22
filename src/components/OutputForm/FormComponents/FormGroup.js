import React from "react";
import FormRender from "../FormRender";

const FormGroup = ({ val, formRef, parentLabel, reRender }) => {
  return (
    <div className="border border-blue-900 p-2">
      <h1 className="mb-2 text-xl font-semibold text-blue-800">{val.label}</h1>
      <FormRender
        data={val.subParameters}
        formRef={formRef}
        parentLabel={
          (parentLabel === "" ? "" : parentLabel + ".") + val.jsonKey
        }
        reRender={reRender}
      />
    </div>
  );
};

export default FormGroup;
