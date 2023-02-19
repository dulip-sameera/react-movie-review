import React from "react";

const Title = ({ name }) => {
  return (
    <div className="border-l-8 border-orange pl-3 text-base md:text-lg font-medium hover:cursor-default bg-orange bg-opacity-5">
      {name}
    </div>
  );
};

export default Title;
