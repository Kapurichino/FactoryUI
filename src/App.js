import Gear from './components/Gear.js';
import MySwiper from './components/MySwiper.js';
import Progressbar from './components/ProgressBar.js';
import ScrollTop from './components/ScrollTop.js';
import Navbar from './components/Navbar.js';
import Menubar from './components/Menubar.js';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import * as Scroll from 'react-scroll';

// timer변수가 로컬이고 각 함수 호출 후 해당 값이 손실 될 수 있다.
// 따라서, 유지하기 위해 함수 외부에 놓아야 한다.
let timerID;

function App() {
  const [start, setStart] = useState("");
  const [visible, setVisible] = useState("");
  const [video, setVideo] = useState("");
  const [show, setShow] = useState("");
  

  
  const boxRef = useRef();
  const object1Ref = useRef();
  const object2Ref = useRef();
  const object3Ref = useRef();

  let scroll = Scroll.animateScroll;


  useEffect(()=>{
    const observer =  new  IntersectionObserver((entries) =>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          observer.unobserve(entry.target);
          object1Ref.current.classList.add("animation1");
          object2Ref.current.classList.add("animation2");
          object3Ref.current.classList.add("animation3");
          setTimeout(()=>{(setShow("show"))}, 3000);
        }
      })
    } ,{root:null, rootMargin:"0px", threshold:0.7})
    observer.observe(boxRef.current);
  }, [])
  // const observeBox = (observer ,items) =>{
  //   const lastItem = items[items.length - 1];
  //   io.observe(lastItem);
  // }

  useEffect(()=>{
    if (start == "start")
      timerID = setTimeout(()=>{(setVisible("show")); setVideo("https://www.youtube.com/embed/93iQRtqhWPM")},3100);
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
      <ScrollTop scroll={scroll}/>
      <Menubar/>
      <Navbar/>
      <div className={"container1"}>           
        <div className={"mainBg"}/> 
        <div className={"overlay"}/>
        <div className={"mainText"}>
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
          <div className={`animation ${start}`}>
          <iframe className={`video ${visible} `} src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} style={{ width:"100%",
        height:"100%"}}></iframe>
          </div>  
        </div>
        <div className={"animationButton"}>
          <span onClick={()=>{
            setStart("start"); 
            let element = document.querySelector('.animation', {passive:true});
            let elementTop = window.pageYOffset + element.getBoundingClientRect().top;
            scroll.scrollTo(parseInt(elementTop), {duration:300})}} style={{marginLeft: "50vw", marginRight:"3vw"}}>
            OPEN
          </span>
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
