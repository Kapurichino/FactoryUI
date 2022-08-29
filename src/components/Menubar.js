import React from 'react'
import { faBook, faCaretDown, faCircleInfo, faMagnifyingGlass, faUserTie, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faElementor } from "@fortawesome/free-brands-svg-icons";
import {RiText, RiArrowDownSFill, RiArrowUpSFill} from 'react-icons/ri'
import './Navbar.scss';

import styled from "styled-components";

const SidebarData = [
    {
        title:'정보',
        icon:<faXmark/>,
        iconClosed:<RiArrowDownSFill/>,
        iconOpened:<RiArrowUpSFill/>,
        sub:[
            {
                title:'sample',
                icon:<RiText/>,
            },
            {
                title:'sample',
                icon:<RiText/>,
            },
            {
                title:'sample',
                icon:<RiText/>,
            },
            {
                title:'sample',
                icon:<RiText/>,
            },
        ]
    },
    {
        title:'서비스',
        icon:<faCircleInfo/>,
        iconClosed:<RiArrowDownSFill/>,
        iconOpened:<RiArrowUpSFill/>,
        sub:[
            {
                title:'sample',
                icon:<RiText/>,
            },
            {
                title:'sample',
                icon:<RiText/>,
            },
            {
                title:'sample',
                icon:<RiText/>,
            },
            {
                title:'sample',
                icon:<RiText/>,
            },
        ]
    },
    {
        title:'스토리',
        icon:<faBook/>,
        iconClosed:<RiArrowDownSFill/>,
        iconOpened:<RiArrowUpSFill/>,
        sub:[
            {
                title:'sample',
                icon:<RiText/>,
            },
            {
                title:'sample',
                icon:<RiText/>,
            },
            {
                title:'sample',
                icon:<RiText/>,
            },
            {
                title:'sample',
                icon:<RiText/>,
            },
        ]
    },
    {
        title:'약속',
        icon:<faUserTie/>,
        iconClosed:<RiArrowDownSFill/>,
        iconOpened:<RiArrowUpSFill/>,
        sub:[
            {
                title:'sample',
                icon:<RiText/>,
            },
            {
                title:'sample',
                icon:<RiText/>,
            },
            {
                title:'sample',
                icon:<RiText/>,
            },
            {
                title:'sample',
                icon:<RiText/>,
            },
        ]
    },
]


const SidebarWrapper = styled.div`

`


const Menubar = () => {
    const [show, setShow] = useState("");
    const [down, setDown] = useState(["", "", "", ""]);
    const [stop, setStop] = useState(false);
    const open = () => {
        document.body.style.overflow = "hidden";
    };

    const close = () => {
        document.body.style.overflow = "unset";
    };

    useEffect(()=>{
        if(stop === true){
            open();
        }
        else{
            close();
        }
    },[stop])
    return (
        <>
        <FontAwesomeIcon icon={faElementor} className={"openIcon"} onClick={()=>{setShow("showMenu"); setStop(!stop);}}/>  
        <div className={`menu ${show}`}>
            <div className={"menuBar"}>
                <div className={"menuContent"}>
                    <FontAwesomeIcon icon={faXmark} className={"closeIcon"} onClick={()=>{setShow(""); setStop(!stop);}}/>
                    <SidebarWrapper>
                        <ul className={down[0]}>
                            <li onClick={()=>{
                                if (down[0] == ""){
                                let copy = [...down];
                                copy[0] = "down"
                                setDown(copy);
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
                                    let copy = [...down];
                                    copy[1] = "down"
                                    setDown(copy);
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
                                    let copy = [...down];
                                    copy[2] = "down"
                                    setDown(copy);
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
                                    let copy = [...down];
                                    copy[3] = "down"
                                    setDown(copy);
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
                    </SidebarWrapper>
                </div>
            </div>
            <div className={"overlay"} onClick={()=>{setShow(""); setStop(!stop);}}/>   
        </div>
    </>
  )
}

export default Menubar
