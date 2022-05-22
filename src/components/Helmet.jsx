import React from "react";
import PropsType from "prop-types";

const Helmet = (props) => {
  document.title = "Yolo - " + props.title;
  return <div>{props.children}</div>;
};

Helmet.prototype = {
  title: PropsType.string.isRequired,
};

export default Helmet;
