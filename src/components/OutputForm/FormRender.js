import React, { useEffect, useState } from "react";
import Input from "./FormComponents/Input";
import Select from "./FormComponents/Select";
const FormRender = ({ data }) => {
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
        return <Input val={val} key={val.sort} />;
      case "Select":
        return <Select val={val} key={val.sort} />;
    }
  };
  return (
    <div className="flex flex-col gap-4">
      {sortedData.map((singleData) => getFormField(singleData))}
    </div>
  );
};

export default FormRender;
