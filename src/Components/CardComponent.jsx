import React from "react";
import "./usehook.css";
const CardComponent = (props) => {
  const { id, img_url, name, rating, description, cast, genre, watch_url } =
    props.CurrentElm;
  let age = 19;

  return (
    <li>
      <div className="Wrapper">
        <div className="head">
          <h1>{name}</h1>
          <span>
            <div>Catagery :~ {genre}</div>
            <div>
              Rateing :~
              <span
                className={`bigavrage ${
                  rating >= 8.5 ? "avrage" : "notavrage"
                }`}
              >
                {rating}
              </span>
              Star
            </div>
          </span>
        </div>
        <div className="body">
          <p>{description}</p>
          <a href={watch_url} target="_blank">
            <button className="Btn-info">
              <span>{age >= 18 ? "Watch Now" : "Not Available"}</span>
            </button>
          </a>
        </div>
        <div className="image-wrapper">
          <img src={img_url} alt="image" className="Images" />
        </div>
      </div>
    </li>
  );
};

export default CardComponent;
