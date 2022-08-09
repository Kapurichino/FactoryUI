import Gear from './components/Gear.js';
import MySwiper from './components/MySwiper.js';
import Progressbar from './components/ProgressBar.js';
import ScrollTop from './components/ScrollTop.js';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { entries } from 'lodash';

// timer변수가 로컬이고 각 함수 호출 후 해당 값이 손실 될 수 있다.
// 따라서, 유지하기 위해 함수 외부에 놓아야 한다.
let timerID;

function App() {
  const [start, setStart] = useState("");
  const [visible, setVisible] = useState("");
  const [video, setVideo] = useState("");
  const [show, setShow] = useState("");
  const videoRef = useRef();
  const boxRef = useRef();
  const object1Ref = useRef();
  const object2Ref = useRef();
  const object3Ref = useRef();


  useEffect(()=>{
    const observer = new IntersectionObserver((entries) =>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          observer.unobserve(entry.target);
          object1Ref.current.classList.add("animation1");
          object2Ref.current.classList.add("animation2");
          object3Ref.current.classList.add("animation3");
          setTimeout(()=>{(setShow("show"))}, 5000);
        }
      })
    } ,{root:null, rootMargin:"0px", threshold:0.9})
    observer.observe(boxRef.current);
  }, [])
    
  // const observeBox = (observer ,items) =>{
  //   const lastItem = items[items.length - 1];
  //   io.observe(lastItem);
  // }

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
      <ScrollTop/>
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
      <div className={"container2"}>
        <div className={"subBg"}/>
        <div className={"overlay"}/> 
        <div className={"container3"}>
          <div className={`animation ${start}`} ref={videoRef}>
          <iframe className={`video ${visible}`} src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} style={{ width:"100%",
        height:"100%"}}></iframe>
          </div>  
        </div>
        <div className={"animationButton"}>
          <span onClick={()=>{setStart("start"); videoRef.current.scrollIntoView();}} style={{marginLeft: "55vw"}}>OPEN</span>
          <div/>
          <span onClick={()=>{setStart("")}} style={{marginRight: "10vw", }}>CLOSE</span>
        </div>
      </div>
      <div className={"container4"} ref={boxRef}>
          <div className={"object1"} ref={object1Ref}></div>
          <div className={"object2"} ref={object2Ref}></div>
          <div className={"object3"} ref={object3Ref}></div>
          <div className={"list"}>
            <ul>
              <li>
                <span className={show}>Challenge</span>
              </li>
              <li>
                <span className={show} style={{backgroundColor:"rgb(255, 239, 213)", transitionDelay:"1s"}}>Patience</span>
              </li>
              <li>
                <span className={show} style={{backgroundColor:"rgb(234, 255, 234)", transitionDelay:"2s"}}>Passion</span>
              </li>
            </ul>
          </div>
      </div>
      <div className={"container5"}></div>

    </div>
  );
}

export default App;
