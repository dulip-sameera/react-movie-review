import { serverTimestamp } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import TextArea from "../components/TextArea";
import updateDocById from "../firebase/updateDocById";
import { useFetch } from "../hook/useFetch";
import useFetchDocument from "../hook/useFetchDocument";
import { userSelector } from "../store/user.slice";
import { posterBase342URL, youtubeBaseURL } from "../utils/Data";
import extractMovieData from "../utils/extractMovieData";
import extractTVData from "../utils/extractTVData";
import Loading from "../utils/Loading";

const EditReview = () => {
  const textAreaRef = useRef();

  const { rid, sid, stype } = useParams();

  const navigate = useNavigate();

  const user = useSelector(userSelector);

  const [rate, setRate] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const { data, error, loading } = useFetchDocument("reviews", rid);

  //   this lines for fetching show poster
  const url = `https://api.themoviedb.org/3/${stype}/${sid}?language=en-US&api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos`;
  const show = useFetch(url);
  let showData;
  let navShowType;
  if (!show.loading) {
    if (stype === "movie") {
      showData = extractMovieData(show, posterBase342URL, youtubeBaseURL);
      navShowType = "movies";
    } else if (stype === "tv") {
      showData = extractTVData(show, posterBase342URL, youtubeBaseURL);
      navShowType = "tvseries";
    }
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleCancelEdit = () => {
    navigate(`/${navShowType}/${sid}`);
  };

  const handleUpdate = () => {
    if (reviewText.trim().length === 0) {
      textAreaRef.current.placeholder = "required!";
      return;
    }

    const updatedReview = {
      userId: user.id,
      movieId: sid,
      text: reviewText.trim(),
      createdTime: serverTimestamp(),
      rate: rate,
    };

    updateDocById("reviews", rid, updatedReview);
    navigate(`/${navShowType}/${sid}`);
  };

  if (loading || show.loading) {
    return <Loading />;
  }

  if (error || show.error) {
    console.log(error);
    console.log(show.error);
    return (
      <div className="container min-h-[500px] flex justify-center items-center">
        <div className="text-3xl font-bold">Something Went Wrong...</div>
        <button
          className="bg-orange text-white py-1 px-2 rounded-lg hover:bg-red-400"
          onClick={handleGoBack}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container min-h-[500px]">
      <div className="sm:max-w-fit p-2 sm:p-0 shadow-lg rounded-md bg-lightOrange bg-opacity-5 flex flex-col justify-center items-center sm:justify-start sm:items-start sm:flex-row item  text-darkBlue mx-auto mt-10">
        <div className="rounded-md sm:rounded-tr-none sm:rounded-br-none max-w-[10rem] sm:max-w-none">
          {show.data && (
            <img
              src={showData.poster}
              alt="show poster"
              className="rounded-md sm:rounded-tr-none sm:rounded-br-none w-full"
            />
          )}
        </div>

        <div className="mt-4 sm:mt-3 sm:p-3 sm:mx-4">
          <div className="font-bold text-lg md:text-xl w-full text-center bg-orange bg-opacity-30 rounded-md px-2 py-1">
            {show.data && showData.title}
          </div>

          {/* logged as */}
          <div className="flex gap-4 mt-1">
            <div className="font-bold text-slate-600">Your Name: </div>
            <div className="text-orange font-bold">{user.name}</div>
          </div>

          {/* review text */}
          <TextArea
            reviewText={reviewText}
            setReviewText={setReviewText}
            initReviewText={data.text}
            textAreaRef={textAreaRef}
          />

          <div className="mt-4">
            <div className="font-bold text-slate-600 text-center">
              Give this {show.data && showData.type} a rate
            </div>
            <StarRating rate={rate} setRate={setRate} initRate={data.rate} />
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <button
              className="bg-orange text-white py-1 px-2 rounded-lg  hover:bg-red-400"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
            <button
              className="bg-orange text-white py-1 px-2 rounded-lg hover:bg-red-400"
              onClick={handleUpdate}
            >
              Update Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditReview;
