import React from "react";
import { useParams } from "react-router-dom";

const Show = () => {
  const { id } = useParams();

  return <div>Show:{id}</div>;
};

export default Show;
