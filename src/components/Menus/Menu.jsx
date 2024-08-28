import React from "react";
import "./Menu.css";
import { menu_list } from "../../assets/assets";
function Menu({ cat, setCat }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="menu-txt">
        Discover a delightful selection of dishes crafted to satisfy every
        craving. From fresh salads to hearty mains, explore our diverse menu and
        find your new favorite meal.
      </p>
      <div className="menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              key="index"
              onClick={() =>
                setCat((prevCat) => {
                  prevCat === item.menu_name ? "All" : item.menu_name;
                })
              }
              className="list-item"
            >
              <img
                className={cat == item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default Menu;
