import React from "react";
import Card from "./Card";

const CardList = ({ data }) => {
  return (
    <div className="card-list">
      {data.length > 0 &&
        data.map((item, index) => <Card data={item} key={index} />)}
    </div>
  );
};

export default CardList;
