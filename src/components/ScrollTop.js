import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { throttle } from "lodash";
import { useEffect, useState } from "react";
import "./ScrollTop.css";

export default function ScrollTop(){
    const [scrollToTop, setScrollToTop] = useState(0);
    const [btnStatus, setBtnStatus] = useState(false);
    
    const updateFollow = ()=>{
        setScrollToTop(window.scrollY);
        scrollToTop > 200 ? setBtnStatus(true) : setBtnStatus(false)
    };
    const handleFollow = throttle(updateFollow, 150);

    const handleTop = ()=>{
        window.scrollTo({
            top:0
        });
        setScrollToTop(0);
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleFollow)
        return ()=>{
            window.removeEventListener('scroll', handleFollow)
        };
    })
    return(
        <>
            <FontAwesomeIcon icon={faChevronCircleUp} className={btnStatus ? "topBtn active" : "topBtn"} onClick={handleTop}/>
        </>
    );
}