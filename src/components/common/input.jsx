import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  //the rest operator lists the other props so we dont have to come here everytime to add something new
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
