import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const ReviewItem = ({ data }) => {
  return (
    <div className="flex gap-4 mt-3 shadow-lg p-2 rounded-md">
      <div>
        <img src={data.photo} alt="" className="rounded-full max-w-[60px]" />
      </div>

      <div>
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{data.name}</h3>
          <div className="flex items-center gap-6">
            <MdDelete className="hover:text-lightOrange" />
            <MdEdit className="hover:text-lightOrange" />
          </div>
        </div>
        <p className="mt-2 text-justify">{data.text}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
