import React from "react";
import "./style.css";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <label>Book</label>
      <input className="form-control" {...props} />
    </div>
  );
}
export function FormBtn(props) {
  return (
    <button {...props} className="btn btn-success">
      <i className="fa fa-search"></i> {props.children}
    </button>
  );
}
