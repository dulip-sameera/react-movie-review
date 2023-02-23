import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import { userSelector } from "../store/user.slice";

const ReviewItem = ({ data }) => {
  const user = useSelector(userSelector);
  return (
    <div className="flex flex-col gap-4 mt-3 shadow-lg p-2 rounded-md md:flex-row">
      <div className="flex items-center justify-center">
        <div className="rounded-full w-[70px] h-[70px] flex items-center justify-center text-lg font-bold text-white bg-orange">
          {data.name.trim().replace(/\s+/g, "").substring(0, 2)}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{data.name}</h3>
          {user && user.id === data.userId && (
            <div className="flex items-center gap-6">
              <MdDelete className="hover:text-lightOrange" />
              <MdEdit className="hover:text-lightOrange" />
            </div>
          )}
        </div>
        <p className="mt-2 text-justify">{data.text}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
