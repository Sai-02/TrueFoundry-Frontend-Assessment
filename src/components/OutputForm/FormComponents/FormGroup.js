import React from "react";
import FormRender from "../FormRender";

const FormGroup = ({ val, formRef, parentLabel, reRender }) => {
  return (
    <div className="">
      <h1 className="">{val.label}</h1>
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
