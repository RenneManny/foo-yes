import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Menu  from '../../components/Menus/Menu'
import Food from '../../components/Display_food/Food'
function Home() {
  const[cat,setCat]=useState("All")
  return (
    <>
      <Header/>
      <Menu cat={cat} setCat={setCat} />
      <Food />
    </>
  )
}

export default Home
