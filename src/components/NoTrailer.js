import React from "react";
import trailerNotAvailable from "../assets/trailerNotAvailabale.jpg";

const NoTrailer = () => {
  return (
    <div className="mt-4">
      <img src={trailerNotAvailable} alt="Trailer not available" />
    </div>
  );
};

export default NoTrailer;
