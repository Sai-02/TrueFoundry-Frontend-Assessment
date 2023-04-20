import React, { useEffect, useState } from "react";
import FormRender from "./FormRender";

const OutputForm = ({ jsonSchema }) => {
  const [parsedSchema, setParsedSchema] = useState([]);
  useEffect(() => {
    handleJsonSchema();
  }, [jsonSchema]);
  const handleJsonSchema = () => {
    if (jsonSchema !== "") {
      const parsed = JSON.parse(jsonSchema);
      if (typeof parsed === "object") setParsedSchema(parsed);
    }
  };
  return (
    <div className="h-screen p-4 flex flex-col gap-6 ">
      <div className="">
        <h1 className="text-2xl text-blue-900 font-semibold">Form Output</h1>
      </div>
      <div className="">
        <FormRender data={parsedSchema} />
      </div>
    </div>
  );
};

export default OutputForm;
