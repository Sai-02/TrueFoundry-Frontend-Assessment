import React from "react";
import FormRender from "../FormRender";

const FormGroup = ({ val, formRef, parentLabel }) => {
  return (
    <div className="">
      <h1 className="">{val.label}</h1>
      <FormRender
        data={val.subParameters}
        formRef={formRef}
        parentLabel={
          (parentLabel === "" ? "" : parentLabel + ".") + val.jsonKey
        }
      />
    </div>
  );
};

export default FormGroup;
