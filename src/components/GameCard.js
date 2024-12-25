import React from "react";
import "../styles/aat.css"; // One level up if styles is outside the pages folder

const GameCard = ({ title, image, link }) => (
  <div className="movie-container">
    <a href={link}>
      <img src={image} alt={title} />
      <div className="movie-title">{title}</div>
    </a>
  </div>
);

export default GameCard;
