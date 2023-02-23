import React, { useState } from "react";
import ReviewItem from "./ReviewItem";

// import ReviewItem from "./ReviewItem";

const Review = ({ movieId }) => {
  const [reviewData, setReviewData] = useState([
    {
      photo: "",
      name: "",
      text: "",
      count: "",
    },
  ]);
  //   console.log(userList);

  return (
    <div>
      {/* title */}
      <div className="border-l-8 border-orange pl-3 text-base md:text-lg font-medium hover:cursor-default bg-orange bg-opacity-5 flex justify-between items-center p-2 mt-4">
        <div>Review</div>
        <button className="bg-orange text-white py-1 px-2 rounded-lg">
          Add Review
        </button>
      </div>
      {reviewData &&
        reviewData.map((item, index) => <ReviewItem data={item} key={index} />)}
    </div>
  );
};

export default Review;
