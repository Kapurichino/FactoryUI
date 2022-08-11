import { faBook, faCaretDown, faCircleInfo, faMagnifyingGlass, faUserTie, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import { useState } from "react";
import { faElementor } from "@fortawesome/free-brands-svg-icons";

export default function Navbar(){
    const [show, setShow] = useState("");
    const [down, setDown] = useState(["", "", "", ""]);
    return(
        <>
            <FontAwesomeIcon icon={faElementor} className={"openIcon"} onClick={()=>{setShow("showMenu")}}/>  
            <div className={`menu ${show}`}>
                <div className={"menuBar"}>
                    <div className={"menuContent"}>
                        <FontAwesomeIcon icon={faXmark} className={"closeIcon"} onClick={()=>{setShow("")}}/>
                        <ul className={down[0]}>
                            <li onClick={()=>{
                                if (down[0] == ""){
                                setDown(["down", "", "", ""]);
                                }
                                else{
                                    let copy = [...down];
                                    copy[0] = "";
                                    setDown(copy);
                                }
                            }}><span><FontAwesomeIcon icon={faCircleInfo}/>정보<FontAwesomeIcon icon={faCaretDown}/></span></li>
                            <li><span>SAMPLE</span></li>
                            <li><span>SAMPLE</span></li>
                            <li><span>SAMPLE</span></li>
                            <li><span>SAMPLE</span></li>
                        </ul>
                        <ul className={down[1]}>
                            <li onClick={()=>{
                                if (down[1] == ""){
                                setDown(["", "down", "", ""]);
                                }
                                else{
                                    let copy = [...down];
                                    copy[1] = "";
                                    setDown(copy);
                                }
                            }}><span><FontAwesomeIcon icon={faMagnifyingGlass}/>서비스<FontAwesomeIcon icon={faCaretDown}/></span></li>
                            <li><span>SAMPLE</span></li>
                            <li><span>SAMPLE</span></li>
                            <li><span>SAMPLE</span></li>
                            <li><span>SAMPLE</span></li>
                        </ul>
                        <ul className={down[2]}>
                            <li onClick={()=>{
                                if (down[2] == ""){
                                setDown(["", "", "down", ""]);
                                }
                                else{
                                    let copy = [...down];
                                    copy[2] = "";
                                    setDown(copy);
                                }
                            }}><span><FontAwesomeIcon icon={faBook}/>스토리<FontAwesomeIcon icon={faCaretDown}/></span></li>
                            <li><span>SAMPLE</span></li>
                            <li><span>SAMPLE</span></li>
                            <li><span>SAMPLE</span></li>
                            <li><span>SAMPLE</span></li>
                        </ul>
                        <ul className={down[3]}>
                            <li onClick={()=>{
                                if (down[3] == ""){
                                setDown(["", "", "", "down"]);
                                }
                                else{
                                    let copy = [...down];
                                    copy[3] = "";
                                    setDown(copy);
                                }
                            }}><span><FontAwesomeIcon icon={faUserTie}/>약속<FontAwesomeIcon icon={faCaretDown}/></span></li>
                            <li><span>SAMPLE</span></li>
                            <li><span>SAMPLE</span></li>
                            <li><span>SAMPLE</span></li>
                            <li><span>SAMPLE</span></li>
                        </ul>
                    </div>
                </div>
                <div className={"overlay"} onClick={()=>{setShow("")}}/>   
            </div>
      
            <div className={"navBar"}>
                <div className={"navContent"}>
                    <ul>
                    <li style={{color:"rgb(250, 250, 230)", backgroundColor: "rgb(247, 178, 52)"}}>
                        <span style={{fontSize: '2rem', height: '4rem'}}>정보</span>
                    </li>
                    <li>
                        <span>SAMPLE</span>
                    </li>
                    <li>
                        <span>SAMPLE</span>
                    </li>
                    <li>
                        <span>SAMPLE</span>
                    </li>
                    <li>
                        <span>SAMPLE</span>
                    </li>
                    </ul>
                </div>
                <div className={"navContent"}>
                    <ul>
                    <li style={{color:"rgb(250, 250, 230)", backgroundColor: "rgb(247, 178, 52)"}}>
                        <span style={{fontSize: '2rem', height: '4rem'}}>서비스</span>
                    </li>
                    <li>
                        <span>SAMPLE</span>
                    </li>
                    <li>
                        <span>SAMPLE</span>
                    </li>
                    <li>
                        <span>SAMPLE</span>
                    </li>
                    <li>
                        <span>SAMPLE</span>
                    </li>
                    </ul>
                </div>
                <div className={"navContent"}>
                    <ul>
                    <li style={{color:"rgb(250, 250, 230)", backgroundColor: "rgb(247, 178, 52)"}}>
                        <span style={{fontSize: '2rem', height: '4rem'}}>스토리</span>
                    </li>
                    <li>
                        <span>SAMPLE</span>
                    </li>
                    <li>
                        <span>SAMPLE</span>
                    </li>
                    <li>
                        <span>SAMPLE</span>
                    </li>
                    <li>
                        <span>SAMPLE</span>
                    </li>
                    </ul>
                </div>
                <div className={"navContent"}>
                    <ul>
                        <li style={{color:"rgb(250, 250, 230)", backgroundColor: "rgb(247, 178, 52)"}}>
                            <span style={{fontSize: '2rem', height: '4rem'}}>약속</span>
                        </li>
                        <li>
                            <span>SAMPLE</span>
                        </li>
                        <li>
                            <span>SAMPLE</span>
                        </li>
                        <li>
                            <span>SAMPLE</span>
                        </li>
                        <li>
                            <span>SAMPLE</span>
                        </li>
                    </ul>
                </div> 
            </div>
        </>
    )
}