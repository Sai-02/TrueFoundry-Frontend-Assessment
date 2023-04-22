import React from "react";

const JsonInput = ({ jsonSchema, setJsonSchema }) => {
  return (
    <div className="h-screen p-4 flex flex-col gap-6 border-r-2">
      <div className="">
        <h1 className="text-2xl text-blue-900 font-semibold">
          Enter the JSON Schema
        </h1>
      </div>
      <textarea
        name=""
        className="grow border-2 border-blue-800 outline-none rounded shadow p-2 custom-scrollbar"
        placeholder="Enter JSON Schema Here"
        onChange={(e) => {
          setJsonSchema(e.target.value);
        }}
      ></textarea>
    </div>
  );
};

export default JsonInput;
