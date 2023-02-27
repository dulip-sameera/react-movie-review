import React, { useEffect, useRef } from "react";

const TextArea = ({
  reviewText,
  setReviewText,
  initReviewText,
  textAreaRef,
}) => {
  const reviewTextRef = useRef(true);

  useEffect(() => {
    setReviewText(initReviewText);
  }, []);
  return (
    <div className="flex flex-col mt-1">
      <label htmlFor="review-text" className="font-bold text-slate-600 mb-1">
        Review:
      </label>
      <textarea
        id="review-text"
        cols="30"
        rows="5"
        className="rounded-md resize-none bg-lightOrange bg-opacity-30 focus:border-none focus:shadow-lg focus:outline-none focus:bg-opacity-40 p-2 placeholder:text-orange placeholder:text-opacity-75 text-orange"
        placeholder="Enter your review..."
        value={reviewTextRef.current ? initReviewText : reviewText}
        ref={textAreaRef}
        onChange={(e) => {
          setReviewText(e.target.value);
          reviewTextRef.current = false;
        }}
      ></textarea>
    </div>
  );
};

export default TextArea;
