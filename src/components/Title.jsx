import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-gray-500">
        {text1} <span>{text2}</span>
      </p>
      <p></p>
    </div>
  );
};

export default Title;
