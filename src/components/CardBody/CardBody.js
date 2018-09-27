import React from "react";
import "./CardBody.css";

const CardBody = (props) => (
  <div className="card-body">
    {props.children}
  </div>
);

export default CardBody;