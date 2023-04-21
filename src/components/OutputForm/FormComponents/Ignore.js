import React from "react";

const Ignore = ({ val, formRef, parentLabel }) => {
  if (formRef.current) {
    const data = new FormData(formRef.current);
    console.log(data);
    data.forEach((val, key) => console.log(val, key));
    console.log(data.get("pizza_type.type"));
  }
  return <div className=""></div>;
};

export default Ignore;
