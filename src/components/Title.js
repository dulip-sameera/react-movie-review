import React from "react";

const Title = ({ name }) => {
  return (
    <div className="border-l-8 border-orange pl-3 text-sm md:text-lg font-medium">
      {name}
    </div>
  );
};

export default Title;
