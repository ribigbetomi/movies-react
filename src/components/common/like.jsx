import React, { Component } from "react";

const Like = (props) => {
  const { liked, onClick } = props;

  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={onClick}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
