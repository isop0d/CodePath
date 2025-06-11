import React from "react";
import {useState} from "react";

const Card = ({ imageUrl, title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="card">
      <img src={imageUrl} className="card-image" />
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <button className="card-button" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? "Hide Info" : "Show Info"}
        </button>
        {showInfo && <p className="card-info">{info}</p>}
      </div>
    </div>
  );
};

export default Card;
