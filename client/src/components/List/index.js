import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="container mt-4">
    <div className="card border">
        <div className="card-header">
        <h5 className="mb-0">Results</h5>
      </div>
    {children}
    </div>
    </div>
  );
}

export function ListItem({ children }) {
  return (
    <div className="card">
    <img className="card-img-top w-100 d-block" alt=""></img>
    <div className="card-body">
      {children}
    </div>
    </div>
  ); 
}
