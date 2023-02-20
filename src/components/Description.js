import React from "react";
import Title from "./Title";

const Description = ({ poster, overview, vote, type }) => {
  return (
    <div className="mt-4 md:flex md:gap-5">
      <div className="flex justify-center">
        <img src={poster} alt="" className="max-w-xs" />
      </div>
      <div className=" mt-4">
        <Title name={"OVERVIEW"} />
        <div className="text-justify">
          {overview !== "" ? overview : `This is a ${type} :)`}
        </div>

        <div className="text-center mt-3 md:text-left md:mt-6">
          <div className="font-medium">
            SCORE : {Math.round(vote * 10) / 10}/10
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
