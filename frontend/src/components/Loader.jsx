import { Spinner } from "react-bootstrap";
import React from "react";
import { autoBatchEnhancer } from "@reduxjs/toolkit";

function Loader() {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{ width: "100px", height: "100px", margin: 'auto', display: 'block'}}
    ></Spinner>
  );
}

export default Loader;
