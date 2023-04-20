import React, { useEffect, useState } from "react";
import Input from "./FormComponents/Input";

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
    }
  };
  return (
    <div className="">
      {sortedData.map((singleData) => getFormField(singleData))}
    </div>
  );
};

export default FormRender;
