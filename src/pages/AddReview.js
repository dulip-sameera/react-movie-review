import {
  addDoc,
  collection,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import GoogleButton from "react-google-button";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import fetchDocsConditionally from "../firebase/fetchDocsConditionally";
import { db } from "../firebase/firebase.config";
import { signInUser } from "../firebase/signInUser";
import { useFetch } from "../hook/useFetch";
import { userSelector } from "../store/user.slice";
import { posterBase342URL, youtubeBaseURL } from "../utils/Data";
import extractMovieData from "../utils/extractMovieData";
import extractTVData from "../utils/extractTVData";
import Loading from "../utils/Loading";

const AddReview = () => {
  const { sid, stype } = useParams();
  const [existsUserReview, setExistsUserReview] = useState(false);
  const [loadingFinished, setLoadingFinished] = useState(false);

  const url = `https://api.themoviedb.org/3/${stype}/${sid}?language=en-US&api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos`;

  const movie = useFetch(url);

  let data;
  let navShowType;
  if (stype === "movie") {
    data = extractMovieData(movie, posterBase342URL, youtubeBaseURL);
    navShowType = "movies";
  } else if (stype === "tv") {
    data = extractTVData(movie, posterBase342URL, youtubeBaseURL);
    navShowType = "tvseries";
  }

  const user = useSelector(userSelector);

  const [rate, setRate] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const navigate = useNavigate();
  const textAreaRef = useRef();

  const handleAddReview = () => {
    console.log(reviewText);
    if (reviewText.trim().length === 0) {
      textAreaRef.current.placeholder = "required!";
      return;
    }
    addDoc(collection(db, "reviews"), {
      userId: user.id,
      movieId: sid,
      text: reviewText.trim(),
      createdTime: serverTimestamp(),
      rate: rate,
      showType: stype,
    });

    navigate(`/${navShowType}/${sid}`);
  };

  const handleCancelReview = () => {
    navigate(`/${navShowType}/${sid}`);
  };

  useEffect(() => {
    user &&
      fetchDocsConditionally(
        query(
          collection(db, "reviews"),
          where("userId", "==", user.id),
          where("movieId", "==", sid)
        )
      ).then((response) => {
        setExistsUserReview(response.length === 0 ? false : true);
        setLoadingFinished(true);
      });
  }, [sid, user]);

  if (!user) {
    return (
      <div className="container min-h-[500px] w-full flex justify-center mt-20">
        <div>
          <div className="font-bold text-xl text-slate-600 text-center mb-10">
            Log In to proceed...
          </div>
          <GoogleButton onClick={signInUser} />
        </div>
      </div>
    );
  }

  if (!loadingFinished) {
    return <Loading />;
  }

  if (user) {
    if (existsUserReview) navigate(`/movies/${sid}`);
    return (
      <div className="container min-h-[500px]">
        {movie.loading && <div>Loading...</div>}
        <div className="sm:max-w-fit p-2 sm:p-0 shadow-lg rounded-md bg-lightOrange bg-opacity-5 flex flex-col justify-center items-center sm:justify-start sm:items-start sm:flex-row item  text-darkBlue mx-auto mt-10">
          <div className="rounded-md sm:rounded-tr-none sm:rounded-br-none max-w-[10rem] sm:max-w-none">
            {movie.data && (
              <img
                src={data.poster}
                alt="show poster"
                className="rounded-md sm:rounded-tr-none sm:rounded-br-none w-full"
              />
            )}
          </div>

          <div className="mt-4 sm:mt-3 sm:p-3 sm:mx-4">
            <div className="font-bold text-lg md:text-xl w-full text-center bg-orange bg-opacity-30 rounded-md px-2 py-1">
              {movie.data && data.title}
            </div>

            {/* logged as */}
            <div className="flex gap-4 mt-1">
              <div className="font-bold text-slate-600">Your Name: </div>
              <div className="text-orange font-bold">{user.name}</div>
            </div>
            {/* review text */}
            <div className="flex flex-col mt-1">
              <label
                htmlFor="review-text"
                className="font-bold text-slate-600 mb-1"
              >
                Review:
              </label>
              <textarea
                id="review-text"
                cols="30"
                rows="5"
                className="rounded-md resize-none bg-lightOrange bg-opacity-30 focus:border-none focus:shadow-lg focus:outline-none focus:bg-opacity-40 p-2 placeholder:text-orange placeholder:text-opacity-75 text-orange"
                placeholder="Enter your review..."
                value={reviewText}
                ref={textAreaRef}
                onChange={(e) => setReviewText(e.target.value)}
              ></textarea>
            </div>

            <div className="mt-4">
              <div className="font-bold text-slate-600 text-center">
                Give this {movie.data && data.type} a rate
              </div>
              <StarRating rate={rate} setRate={setRate} />
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <button
                className="bg-orange text-white py-1 px-2 rounded-lg  hover:bg-red-400"
                onClick={handleCancelReview}
              >
                Cancel Review
              </button>
              <button
                className="bg-orange text-white py-1 px-2 rounded-lg hover:bg-red-400"
                onClick={handleAddReview}
              >
                Add Review
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AddReview;
