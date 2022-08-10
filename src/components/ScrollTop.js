import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { throttle } from "lodash";
import { useEffect, useRef, useState } from "react";
import "./ScrollTop.css";

export default function ScrollTop(props){
    const [scrollToTop, setScrollToTop] = useState(0);
    const [btnStatus, setBtnStatus] = useState(false);
    const eleRef = useRef();
    
    const updateFollow = ()=>{
        setScrollToTop(window.scrollY);
        scrollToTop > 200 ? setBtnStatus(true) : setBtnStatus(false)
    };
    const handleFollow = throttle(updateFollow, 150);

    const handleTop = ()=>{
        props.scroll.scrollToTop({duration:300});
        setScrollToTop(0);
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleFollow, {passive:true})
        return ()=>{
            window.removeEventListener('scroll', handleFollow, {passive:true})
        };
    })
    return(
        <>
            <FontAwesomeIcon icon={faChevronCircleUp} ref = {eleRef} className={btnStatus ? "topBtn active" : "topBtn"} onClick={handleTop}/>
        </>
    );
}