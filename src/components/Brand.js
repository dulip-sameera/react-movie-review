import React from "react";
import logo from "../assets/logo.png";

const Brand = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={logo} alt="brand logo" className="w-20 lg:w-25" />
    </div>
  );
};

export default Brand;
