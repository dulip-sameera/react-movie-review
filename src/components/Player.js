import React from "react";
import ReactPlayer from "react-player";

const Player = ({ url }) => {
  return (
    <div className="pt-[56.25%] relative mt-4">
      <ReactPlayer
        url={url}
        className="absolute top-0 left-0"
        width="100%"
        height={"100%"}
        controls={true}
      />
    </div>
  );
};

export default Player;
