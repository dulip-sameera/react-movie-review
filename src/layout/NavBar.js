import React from "react";
import { Link } from "react-router-dom";
import Brand from "../components/Brand";
import Navigation from "../components/Navigation";
import Register from "../components/Register";

const NavBar = () => {
  return (
    <div className="bg-orange p-4 sticky top-0 z-50">
      <div className="container flex flex-col sm:flex-row justify-center sm:justify-between items-center px-4">
        <Link to={"/"}>
          <Brand />
        </Link>
        <Navigation />
        <Register />
      </div>
    </div>
  );
};

export default NavBar;
