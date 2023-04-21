import React, { useEffect, useState } from "react";
import FormRender from "../FormRender";
const Ignore = ({ val, formRef, parentLabel, reRender }) => {
  const data = new FormData(formRef.current);
  console.log(data, val?.conditions["jsonKey"]);
  useEffect(() => {
    reRender();
  }, []);
  const shouldShow = () => {
    return eval(`
      "${data?.get(val?.conditions[0]["jsonKey"])}" 
        ${val?.conditions[0]["op"]}
        "${val?.conditions[0]["value"]}"
    `);
  };
  return (
    <div className="">
      {shouldShow() ? (
        <FormRender
          data={val?.subParameters}
          formRef={formRef}
          parentLabel={parentLabel}
          reRender={reRender}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Ignore;
