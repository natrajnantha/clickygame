import React from "react";
import "./BirdCard.css";

const BirdCard = props => (
  <div className="card">
    <div className="img-container">
      <a
        key={props.birdname}
        onClick={() => props.processSelected(props.birdname)}
        className="bird1"
      >
        <img alt={props.birdname} src={props.image} />
      </a>
    </div>
  </div>
);

export default BirdCard;
