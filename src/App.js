import Gear from './components/Gear.js';
import MySwiper from './components/MySwiper.js';
import Progressbar from './components/ProgressBar.js';
import './App.css';
import { useEffect, useRef, useState } from 'react';

// timer변수가 로컬이고 각 함수 호출 후 해당 값이 손실 될 수 있다.
// 따라서, 유지하기 위해 함수 외부에 놓아야 한다.
let timerID;

function App() {
  const [start, setStart] = useState("");
  const [visible, setVisible] = useState("");
  const [video, setVideo] = useState("");
  const videoRef = useRef();

  useEffect(()=>{
    if (start == "start")
      timerID = setTimeout(()=>{(setVisible("show")); setVideo("https://www.youtube.com/embed/93iQRtqhWPM")},4500);
    else{
      clearTimeout(timerID);
      setVisible("");
      setVideo("");
    }
  },[start])
  return (
    <div style={{ overflow: "hidden" }}>
      <Progressbar/>
      <Gear/>
      <div className={"navBar"}>
        <div className={"listContainer"}>
          <ul>
            <li><span>정보</span></li>
            <li><span>서비스</span></li>
            <li><span>스토리</span></li>
            <li><span>약속</span></li>
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
          <div className={`animation ${start}`} ref={videoRef}>
            <iframe className={`video ${visible}`} src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
          </div>  
        </div>
        <div className={"animationButton"}>
          <span onClick={()=>{setStart("start"); videoRef.current.scrollIntoView();}} style={{marginLeft: "55vw"}}>OPEN</span>
          <div/>
          <span onClick={()=>{setStart("")}} style={{marginRight: "10vw", }}>CLOSE</span>
        </div>
      </div>
    </div>
  );
}

export default App;
