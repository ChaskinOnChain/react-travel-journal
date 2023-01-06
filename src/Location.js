import React from "react";
import LocationLogo from "./locationLogo.png";

export default function Location(props) {
  return (
    <div className="bottom-container">
      <div className="image-div">
        <img className="pic-of-location" src={props.item.imageUrl} alt="fuji" />
      </div>
      <div className="info-div">
        <img className="location-logo" src={LocationLogo} alt="Location Logo" />
        <span className="country">{props.item.location.toUpperCase()}</span>
        <a href={props.item.googleMapsUrl} target="_blank">
          View on Google Maps
        </a>
        <h1>{props.item.title}</h1>
        <p>
          <strong>
            {props.item.startDate} - {props.item.endDate}
          </strong>
        </p>
        <p className="des">{props.item.description}</p>
      </div>
    </div>
  );
}
