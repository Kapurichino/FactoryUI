import Gear from './components/Gear.js';
import MySwiper from './components/MySwiper.js';
import Progressbar from './components/ProgressBar.js';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [start, setStart] = useState("");
  const [visible, setVisible] = useState("");
  useEffect(()=>{
    if (start == "start")
      setTimeout(()=>{(setVisible("show"))},4500);
    else{
      setVisible("");
    }
  },[start])
  return (
    <div style={{ overflow: "hidden" }}>
      <Progressbar/>
      <Gear/>
      <div className={"navBar"}>
        <div className={"listContainer"}>
          <ul>
            <li><span>start</span></li>
            <li><span>start</span></li>
            <li><span>start</span></li>
            <li><span>start</span></li>
          </ul>
        </div>
      </div>
      <div className={"container1"}>           
        <div className={"mainBg"}/> 
        <div className={"overlay"}/>
        <div className={"mainText middle"}>
          <div>
            <p>Innovative Design</p>
            <p>Factory UI</p>
          </div>  
        </div>       
      </div>
      <div className={"postBox"}>
        <MySwiper/>
      </div>
      <div className={"container2"} style={{height:"60vw", marginTop:"20vh"}}>
        <div className={"subBg"}/>
        <div className={"overlay"}/> 
        <div className={"container3"}>
          <div className={`animation ${start}`}>
              <video className={`video ${visible}`} controls muted="muted" autoPlay loop src={process.env.PUBLIC_URL+"/video/ocean.mov"} type="video.mov" > </video>
          </div>  
        </div>
        <div className={"animationButton"}>
          <span onClick={()=>{setStart("start")}} style={{marginLeft: "50vw"}}>OPEN</span>
          <div style={{flexGrow:"1"}}/>
          <span onClick={()=>{setStart("")}} style={{marginRight: "10vw"}}>CLOSE</span>
        </div>
      </div>
    </div>
  );
}

export default App;
