import React, { useContext } from "react";
import "./Food.css";
import { StoreContext } from "../../Context/StoreContext";
import Foodtem from "../Food-item/Foodtem";
function Food({cat}) {
  
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes</h2>
      {/* Render food_list or any other UI components */}
      <div className="foo-list">
        {food_list.map((item,index) => {
          
return (  <Foodtem
           
  key={item.id}
    price={item.price}
    description={item.description}
    image={item.image}
    name={item.name}
  />)
  

        
        })}
      </div>
    </div>
  );
}

export default Food;
