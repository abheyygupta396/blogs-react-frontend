import React from "react";
import { render } from "react-dom";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import App from "./App";
import { Toaster } from "react-hot-toast";

render(
  <BrowserRouter>
    <Toaster />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
