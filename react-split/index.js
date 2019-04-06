import ReactDOM from "react-dom";
import React from "react";
import SimpleContainer from "./js/components/container/SimpleContainer.jsx";

const simple = document.getElementById("simple");

simple ? ReactDOM.render(<SimpleContainer />, simple) : false;
