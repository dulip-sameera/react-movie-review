import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

const StarRating = ({ rate, setRate, initRate }) => {
  const [hover, setHover] = useState(0);
  const [initializedRate, setInitializedRate] = useState(initRate);

  useEffect(() => {
    if (initRate) setRate(initRate);
  }, [initRate, setRate]);

  return (
    <div className="star-rating">
      {[
        [...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={
                index <= (hover || initializedRate || rate) ? "on" : "off"
              }
              onClick={() => {
                setRate(index);
                setInitializedRate(null);
              }}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(initializedRate || rate)}
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
