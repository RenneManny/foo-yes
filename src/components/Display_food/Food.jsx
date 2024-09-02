import React, { useContext } from "react";
import "./Food.css";
import { StoreContext } from "../../Context/StoreContext";
import Foodtem from "../Food-item/Foodtem";
function Food({ cat }) {
  console.log(`The categoty is :${cat}`)
  const { food_list } = useContext(StoreContext);
  const filteredFoodList = food_list.filter(item => cat === "All" || cat === item.cat);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes</h2>
      {/* Render food_list or any other UI components */}
      <div className="foo-list">
      {filteredFoodList.map((item, index) => (
          <Foodtem
            key={index} // Use a unique identifier like _id if available
            id={item._id}
            price={item.price}
            description={item.description}
            image={item.image}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Food;
