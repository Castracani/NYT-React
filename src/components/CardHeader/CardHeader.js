import React from "react";
import "./CardHeader.css";

const CardHeader = (props) => (
  <div className="card-header">
    {props.children}
  </div>
);

export default CardHeader;