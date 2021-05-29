import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ text }) => {
  return (
    <div className="sectionTitle">
      <div className="text">{text}</div>
      <div className="underline" />
    </div>
  );
};

export default SectionTitle;
