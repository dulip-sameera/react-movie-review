import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import fetchReviewData from "../firebase/fetchReviewData";
import { userSelector } from "../store/user.slice";
import ReviewItem from "./ReviewItem";

const Review = ({ movieId, type }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // this state used to reload the review component after a  deletion of a review ocurred
  const [reload, setReload] = useState(false);

  const user = useSelector(userSelector);

  useEffect(() => {
    fetchReviewData(movieId, type, user).then((response) => {
      setData(response);
      setLoading(true);
    });
  }, [movieId, user, reload, type]);

  if (loading && data.length > 0) {
    return (
      <div>
        {/* title */}
        <div className="border-l-8 border-orange pl-3 text-base md:text-lg font-medium hover:cursor-default bg-orange bg-opacity-5 flex justify-between items-center p-2 mt-4">
          <div>Review</div>
          {!("userHasReview" in data[0]) && (
            <Link
              to={`/addreview/${data[0].showType}/${movieId}`}
              className="bg-orange text-white py-1 px-2 rounded-lg"
            >
              Add Review
            </Link>
          )}
        </div>
        {data &&
          data.map((item, index) => (
            <ReviewItem
              data={item}
              reloadReview={{ reload, setReload }}
              key={index}
            />
          ))}
      </div>
    );
  } else if (loading) {
    return (
      <div className="mt-4 flex justify-center">
        <Link
          to={`/addreview/${type}/${movieId}`}
          className="bg-orange text-white py-2 px-4 text-lg rounded-lg"
        >
          Add Review
        </Link>
      </div>
    );
  }
};

export default Review;
