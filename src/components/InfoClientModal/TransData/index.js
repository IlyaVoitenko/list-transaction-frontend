import React from "react";

const TransData = ({ trans }) => {
  return (
    <div className="text-left">
      {Object.keys(trans).map((key) => (
        <p key={key}>
          {key} : {trans[key]}
        </p>
      ))}
    </div>
  );
};

export default TransData;
