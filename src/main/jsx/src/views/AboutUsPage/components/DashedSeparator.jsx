import React from "react";

const DashedSeparator = ({ width } = { width: "100%" }) => {
  return (
    <div
      style={{
        width,
        margin: "10px 0 10px 0",
        borderBottom: "2px dashed rgba(255, 203, 5, 1)"
      }}
    />
  );
};

export default DashedSeparator;
