import React from "react";

function Titles({ title }) {
  console.log(title);
  return <h3 className="title-item">{title}</h3>;
}

export default Titles;
