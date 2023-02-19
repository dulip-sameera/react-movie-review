import React from "react";

const Navigation = () => {
  return (
    <div className="sm:flex gap-4 text-white text-lg hidden ">
      <div className="p-1 hover:cursor-pointer hover:bg-white hover:text-orange hover:border-white hover:rounded-md transition-all duration-300">
        Movies
      </div>
      <div className="p-1 hover:cursor-pointer hover:bg-white hover:text-orange hover:border-white hover:rounded-md transition-all duration-300">
        TV Series
      </div>
    </div>
  );
};

export default Navigation;