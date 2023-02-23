import React from "react";
import useFetchReview from "../hook/useFetchReview";
import ReviewItem from "./ReviewItem";

const Review = ({ movieId }) => {
  const { data } = useFetchReview(movieId);

  return (
    <div>
      {/* title */}
      <div className="border-l-8 border-orange pl-3 text-base md:text-lg font-medium hover:cursor-default bg-orange bg-opacity-5 flex justify-between items-center p-2 mt-4">
        <div>Review</div>
        <button className="bg-orange text-white py-1 px-2 rounded-lg">
          Add Review
        </button>
      </div>
      {data &&
        data.map((item, index) => <ReviewItem data={item} key={index} />)}
    </div>
  );
};

export default Review;
