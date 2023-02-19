import React from "react";
import { Link } from "react-router-dom";
import Brand from "../components/Brand";
import Navigation from "../components/Navigation";
import Register from "../components/Register";
import SearchBar from "../components/SearchBar";

const NavBar = () => {
  return (
    <div className="bg-orange p-4">
      <div className="container flex justify-between items-center">
        <Link to={"/"}>
          <Brand />
        </Link>
        <SearchBar />
        <Navigation />
        <Register />
      </div>
    </div>
  );
};

export default NavBar;
