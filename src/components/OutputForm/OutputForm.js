import React, { useEffect, useRef, useState } from "react";
import FormRender from "./FormRender";
import ErrorSection from "../ErrorSection/ErrorSection";

const OutputForm = ({ jsonSchema }) => {
  const [parsedSchema, setParsedSchema] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [isError, setIsError] = useState(false);
  const formRef = useRef(null);
  useEffect(() => {
    handleJsonSchema();
  }, [jsonSchema]);
  const reRender = () => {
    setToggle((toggle) => !toggle);
  };
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
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {};
    const formData = new FormData(formRef.current);
    formData.forEach((val,key) => {
      obj[key] = val;
    });
    console.log(obj);
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
          <form ref={formRef} onSubmit={handleSubmit}>
            <FormRender
              data={parsedSchema}
              formRef={formRef}
              parentLabel=""
              reRender={reRender}
            />
            <div className="mt-4">
              <button
                type="submit"
                className="rounded text-white p-2 bg-blue-500 shadow text-lg text-center w-32"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default OutputForm;
