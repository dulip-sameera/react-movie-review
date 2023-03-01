import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center mt-4 sm:mt-0 sm:gap-4 text-white ">
      <Link
        to={"/movies"}
        className="p-1 hover:cursor-pointer hover:bg-white hover:text-orange hover:border-white hover:rounded-md transition-all duration-300 text-sm sm:text-lg"
      >
        Movies
      </Link>
      <Link
        to={"/tvseries"}
        className="p-1 hover:cursor-pointer hover:bg-white hover:text-orange hover:border-white hover:rounded-md transition-all duration-300 text-sm sm:text-lg"
      >
        TV Series
      </Link>
    </div>
  );
};

export default Navigation;
