import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sm:flex gap-4 text-white text-lg hidden ">
      <Link
        to={"/movies"}
        className="p-1 hover:cursor-pointer hover:bg-white hover:text-orange hover:border-white hover:rounded-md transition-all duration-300"
      >
        Movies
      </Link>
      <Link
        to={"/tvseries"}
        className="p-1 hover:cursor-pointer hover:bg-white hover:text-orange hover:border-white hover:rounded-md transition-all duration-300"
      >
        TV Series
      </Link>
    </div>
  );
};

export default Navigation;
