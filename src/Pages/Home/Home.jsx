import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menus/Menu";
import Food from "../../components/Display_food/Food";
import Appdownload from "../../components/App_Download/Appdownload";
function Home() {
  const [cat, setCat] = useState("All");
  return (
    <>
      <Header />
      <Menu cat={cat} setCat={setCat} />
      <Food cat={cat} />
      <Appdownload/>
    </>
  );
}

export default Home;
