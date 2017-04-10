import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as Three from "three";
import "./index.scss";
import "./styles/style.scss";

window.THREE = Three;

ReactDOM.render(<App />, document.getElementById("root"));
