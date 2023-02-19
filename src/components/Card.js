import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { id, poster, title, vote, type } = data;

  return (
    <Link to={`/${type}/${id}`} className="mb-4 hover:cursor-pointer" id={id}>
      <div className="relative card-img">
        <div className="bg-black absolute w-full h-full rounded-xl opacity-0 hover:opacity-20 duration-300"></div>
        <img src={poster} alt={`${title}`} className="rounded-xl card-img" />
      </div>
      <div className="mt-2 hover:text-orange hover:underline">
        <div className="flex items-center gap-1 text-sm">
          <AiFillStar className="text-lightOrange" size={20} />
          {`${vote}/10`}
        </div>
        <div className="font-medium">{title}</div>
      </div>
    </Link>
  );
};

export default Card;
