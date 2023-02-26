import React from "react";
import { AiFillStar } from "react-icons/ai";

const ShowStarRate = ({ rate }) => {
  return (
    <div className="flex mt-3 justify-center sm:justify-start">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <span className={index <= rate ? "on" : "off"}>
            <AiFillStar />
          </span>
        );
      })}
    </div>
  );
};

export default ShowStarRate;
