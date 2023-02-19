import React from "react";
import CardList from "./CardList";
import Title from "./Title";

const Section = ({ title, data }) => {
  return (
    <div className="">
      <Title name={title} />
      <CardList data={data} />
    </div>
  );
};

export default Section;
