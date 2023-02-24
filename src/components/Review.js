import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import fetchReviewData from "../firebase/fetchReviewData";
import useFetchReview from "../hook/useFetchReview";
import { userSelector } from "../store/user.slice";
import ReviewItem from "./ReviewItem";

const Review = ({ movieId }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = useSelector(userSelector);

  useEffect(() => {
    fetchReviewData(movieId, user).then((response) => {
      setData(response);
      setLoading(true);
    });
  }, []);

  if (loading && data.length > 0) {
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
  } else if (loading) {
    return (
      <div className="mt-4 flex justify-center">
        <button className="bg-orange text-white py-2 px-4 text-lg rounded-lg">
          Add Review
        </button>
      </div>
    );
  }
};

export default Review;
