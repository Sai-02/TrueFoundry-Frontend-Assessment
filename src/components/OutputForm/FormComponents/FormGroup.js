import React from "react";
import FormRender from "../FormRender";

const FormGroup = ({ val }) => {
  return (
    <div className="">
      <h1 className="">{val.label}</h1>
      <FormRender data={val.subParameters} />
    </div>
  );
};

export default FormGroup;
