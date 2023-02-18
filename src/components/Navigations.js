import React from "react";

const Navigations = () => {
  return (
    <div className="flex gap-4 text-white text-lg">
      <div className="p-1 hover:cursor-pointer hover:bg-white hover:text-orange hover:border-white hover:rounded-md transition-all duration-500">
        Movies
      </div>
      <div className="p-1 hover:cursor-pointer hover:bg-white hover:text-orange hover:border-white hover:rounded-md transition-all duration-500">
        TV Series
      </div>
    </div>
  );
};

export default Navigations;
