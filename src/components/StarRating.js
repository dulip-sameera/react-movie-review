import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const StarRating = ({ rate, setRate }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[
        [...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rate) ? "on" : "off"}
              onClick={() => setRate(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rate)}
              onDoubleClick={() => {
                setRate(0);
                setHover(0);
              }}
            >
              <span className="star">
                <AiFillStar />
                {/* &#9733; */}
              </span>
            </button>
          );
        }),
      ]}
    </div>
  );
};

export default StarRating;
