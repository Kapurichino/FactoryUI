import Gear from './components/Gear.js';
import MySwiper from './components/MySwiper.js';
import Progressbar from './components/ProgressBar.js';
import './App.css';


function App() {
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
      <div className={"container2"} style={{height:"100vh", marginTop:"20vh"}}>
        <div className={"subBg"}/>
        <div className={"overlay"}/>       
      </div>
    </div>
  );
}

export default App;
