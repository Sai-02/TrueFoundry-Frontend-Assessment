import React, { useEffect, useState } from "react";
import Input from "./FormComponents/Input";
import Select from "./FormComponents/Select";
import FormGroup from "./FormComponents/FormGroup";
import Radio from "./FormComponents/Radio";
import Ignore from "./FormComponents/Ignore";
import Switch from "./FormComponents/Switch";
const FormRender = ({ data, formRef, parentLabel, reRender, required }) => {
  const [sortedData, setSortedData] = useState([]);
  useEffect(() => {
    storeSortedData();
  }, [data]);
  const storeSortedData = () => {
    const sd = data.sort((a, b) => a.sort - b.sort);
    setSortedData(sd);
  };
  const getFormField = (val) => {
    switch (val.uiType) {
      case "Input":
        return (
          <>
            {(required && val?.validate?.required) || !required ? (
              <Input
                val={val}
                key={val.sort}
                parentLabel={parentLabel}
                reRender={reRender}
              />
            ) : (
              <></>
            )}
          </>
        );
      case "Select":
        return (
          <>
            {(required && val?.validate?.required) || !required ? (
              <Select
                val={val}
                key={val.sort}
                parentLabel={parentLabel}
                reRender={reRender}
              />
            ) : (
              <></>
            )}
          </>
        );
      case "Group":
        return (
          <>
            {(required && val?.validate?.required) || !required ? (
              <FormGroup
                val={val}
                key={val.sort}
                formRef={formRef}
                parentLabel={parentLabel}
                reRender={reRender}
              />
            ) : (
              <></>
            )}
          </>
        );
      case "Radio":
        return (
          <>
            {(required && val?.validate?.required) || !required ? (
              <Radio
                val={val}
                key={val.sort}
                parentLabel={parentLabel}
                reRender={reRender}
              />
            ) : (
              <></>
            )}
          </>
        );
      case "Ignore":
        return (
          <>
            {(required && val?.validate?.required) || !required ? (
              <Ignore
                val={val}
                key={val.sort}
                formRef={formRef}
                parentLabel={parentLabel}
                reRender={reRender}
              />
            ) : (
              <></>
            )}
          </>
        );
      case "Switch":
        return (
          <>
            {(required && val?.validate?.required) || !required ? (
              <Switch
                val={val}
                key={val.sort}
                formRef={formRef}
                parentLabel={parentLabel}
                reRender={reRender}
              />
            ) : (
              <></>
            )}
          </>
        );
    }
  };
  return (
    <div className="flex flex-col gap-4 p-3">
      {sortedData.map((singleData) => getFormField(singleData))}
    </div>
  );
};

export default FormRender;
