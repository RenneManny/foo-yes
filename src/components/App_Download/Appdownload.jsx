import React from 'react'
import "./App.css"
import {assets} from "../../assets/assets"
function Appdownload() {
  return (
    <>
      <div className="app-download" id="app-download">
    <p>For <strong>"zyaka"</strong>
         with <strong>"sehat"</strong>  download <br />fooYes App </p>
    <div className="platforms">
        <div className='platform-img'><img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" /></div>
<div className='playstore'>
    <img  src={assets.fooYesPlaystore} alt="" />
</div>
    </div>
      </div>
    </>
  )
}

export default Appdownload
