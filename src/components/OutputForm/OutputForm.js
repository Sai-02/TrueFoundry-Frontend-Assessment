import React, { useEffect, useRef, useState } from "react";
import FormRender from "./FormRender";
import ErrorSection from "../ErrorSection/ErrorSection";

const OutputForm = ({ jsonSchema }) => {
  const [parsedSchema, setParsedSchema] = useState([]);
  const [isError, setIsError] = useState(false);
  const formRef = useRef(null);
  useEffect(() => {
    handleJsonSchema();
  }, [jsonSchema]);
  const handleJsonSchema = () => {
    if (jsonSchema !== "") {
      try {
        const parsed = JSON.parse(jsonSchema);
        if (typeof parsed === "object") setParsedSchema(parsed);
        setIsError(false);
      } catch (e) {
        setIsError(true);
      }
    }
  };
  return (
    <div className="h-screen p-4 flex flex-col gap-6 ">
      <div className="">
        <h1 className="text-2xl text-blue-900 font-semibold">Form Output</h1>
      </div>
      <div className="">
        {isError ? (
          <ErrorSection />
        ) : (
          <form ref={formRef}>
            <FormRender data={parsedSchema} formRef={formRef} parentLabel="" />
          </form>
        )}
      </div>
    </div>
  );
};

export default OutputForm;
