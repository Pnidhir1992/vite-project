import React from "react";
import "./index.css";
import WebSeriesData from "./Api/WebSeriesApiData.json";
import CardComponent from "./Components/CardComponent";

const CardOfWeb = () => {
  return (
    <>
      <ul className="card-vertical">
        {WebSeriesData.map((CurrentElm) => {
          return <CardComponent key={CurrentElm.id} CurrentElm={CurrentElm} />;
        })}
      </ul>
    </>
  );
};

export default CardOfWeb;
