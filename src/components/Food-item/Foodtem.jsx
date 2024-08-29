import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Food-item.css";
import { StoreContext } from "../../Context/StoreContext";

function Foodtem({ id, name, price, description, image }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // Get the current count of the item from the cart
  const itemCount = cartItems[id] || 0;

  return (
    <div className="food-item">
      <div className="food-container">
        <img className="food-img" src={image} alt={name} />
        {itemCount === 0 ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add to Cart"
          />
        ) : (
          <div className="foodCounter">
            <img
              className="increase"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Increase Quantity"
            />
            <p>{itemCount}</p>
            <img
              className="decrease"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Decrease Quantity"
            />
          </div>
        )}
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
