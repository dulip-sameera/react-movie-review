import React from "react";
import Brand from "../components/Brand";
import Navigation from "../components/Navigation";
import Register from "../components/Register";
import SearchBar from "../components/SearchBar";

const NavBar = () => {
  return (
    <div className="bg-orange p-4">
      <div className="container flex justify-between items-center">
        <Brand />
        <SearchBar />
        <Navigation />
        <Register />
      </div>
    </div>
  );
};

export default NavBar;
