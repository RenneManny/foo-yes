import React from "react";
import { assets } from "../../assets/assets.js";

function Fooditem() {
  const foodItem = { id, name, price, description, image };
  console.log(foodItem.id);
  return (
    <div className="food-item">
      <div className="food-container">
        <img className="food-img" src={image} alt="" />
      </div>
      <div className="food-info">
        <div className="name-rating">
          <p>{name}</p>
          <img src={foodItem.rating_starts} alt="" />
        </div>
        <p className="description">{foodItem.description}</p>
        <p>${foodItem.price}</p>
      </div>
    </div>
  );
}

export default Fooditem;
