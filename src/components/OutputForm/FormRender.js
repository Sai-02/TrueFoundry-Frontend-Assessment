import React, { useEffect, useState } from "react";
import Input from "./FormComponents/Input";
import Select from "./FormComponents/Select";
import FormGroup from "./FormComponents/FormGroup";
import Radio from "./FormComponents/Radio";
import Ignore from "./FormComponents/Ignore";
const FormRender = ({ data, formRef, parentLabel }) => {
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
        return <Input val={val} key={val.sort} parentLabel={parentLabel} />;
      case "Select":
        return <Select val={val} key={val.sort} parentLabel={parentLabel} />;
      case "Group":
        return (
          <FormGroup
            val={val}
            key={val.sort}
            formRef={formRef}
            parentLabel={parentLabel}
          />
        );
      case "Radio":
        return <Radio val={val} key={val.sort} parentLabel={parentLabel} />;
      case "Ignore":
        return (
          <Ignore
            val={val}
            key={val.sort}
            formRef={formRef}
            parentLabel={parentLabel}
          />
        );
    }
  };
  return (
    <div className="flex flex-col gap-4">
      {sortedData.map((singleData) => getFormField(singleData))}
    </div>
  );
};

export default FormRender;
