import React from "react";
import "./alert.css";

const Alert = ({ msg, searchTerm }) => {
  return (
    <div className="alert">
      <h3>{msg}</h3>
    </div>
  );
};

export default Alert;
