import React from "react";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron">
    <h1 className="d-flex justify-content-center">Google Books Search</h1>
    <p className="d-flex justify-content-center">Search for and Save Books of Interest</p>
    </div>
    // <div
    //   style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    //   className="jumbotron"
    // >
    //   {children}
    // </div>
  );
}

export default Jumbotron;
