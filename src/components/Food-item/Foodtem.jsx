import React from "react";
import { assets } from "../../assets/assets";
import "./Food-item.css";
function Foodtem({ id, name, price, description, image }) {
  return (
    <div className="food-item">
      <div className="food-container">
        <img className="food-img" src={image} alt={name} />
      </div>
      <div className="food-info">
        <div className="name-rating">
          <p>{name}</p>
          {/* Assuming you have a rating image, otherwise remove this line */}
          <img src={assets.rating_starts} alt="Rating Stars" />
        </div>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
      </div>
    </div>
  );
}

export default Foodtem;
