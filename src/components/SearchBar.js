import React, { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";

const SearchBar = () => {
  const [showClose, setShowClose] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef();

  const handleChange = (e) => {
    setShowClose(true);
    setSearchValue(e.target.value);
  };

  const clearSearch = () => {
    inputRef.current.value = "";
    setSearchValue("");
    setShowClose(false);
  };

  return (
    <div className="flex relative items-center">
      <BsSearch
        size={20}
        color="white"
        className="absolute left-2 hover:cursor-pointer"
        onClick={() => inputRef.current.focus()}
      />
      <input
        type="text"
        className="rounded-2xl bg-darkBrown outline-none border-2 border-white text-white text-sm sm:text-sm px-8 py-0.5 sm:py-1 flex items-center align-middle w-28 md:w-80 placeholder:text-lightGray"
        // value={searchValue}
        value={searchValue}
        onChange={handleChange}
        placeholder="Search..."
        ref={inputRef}
      />
      {showClose && (
        <RiCloseFill
          size={25}
          color="white"
          className="absolute right-2 hover:cursor-pointer"
          onClick={clearSearch}
        />
      )}
    </div>
  );
};

export default SearchBar;
