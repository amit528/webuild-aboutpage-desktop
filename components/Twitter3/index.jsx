import React from "react";
import "./Twitter3.css";

function Twitter3(props) {
  const { src } = props;

  return (
    <div className="twitter">
      <img className="vector-49" src={src} />
    </div>
  );
}

export default Twitter3;
