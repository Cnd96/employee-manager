import React from "react";

export type ButtonProps = {
  text: string;
};

const TestButton = ({ text}: ButtonProps) => {
  return (
    <h2
      style={{
        height: "25px",
        fontSize: "14px",
        borderRadius: "15px",
      }}
    >
      {text}
    </h2>
  );
};
export default TestButton;
