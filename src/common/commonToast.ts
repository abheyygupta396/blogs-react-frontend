import React from "react";
import toast, { Toaster } from "react-hot-toast";
import "../assets/custom.css";

const commonToasts = {
  errorToast,
  successToast,
};

export default commonToasts;

function errorToast(data: any) {
  toast.error(data, {
    duration: 8000,
    position: "top-right",
    className: "toast-div-address whitespace-break",
  });
}

function successToast(data: any) {
  toast.success(data, {
    duration: 5000,
    position: "top-right",
    className: "toast-div-address-success whitespace-break",
  });
}
