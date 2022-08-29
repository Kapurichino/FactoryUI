import React from 'react'
import { useEffect, useState } from "react";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";
import SidebarData from './SidebarData';
import styled from "styled-components";
import SubMenu from './SubMenu';



const MenuIcon = styled(RiMenuFill)`
    position:fixed;
    top:5%;
    right:5%;
    font-size: 3rem;
    z-index: 10;
    color: rgb(88, 118, 252);
    background-color: transparent;
    opacity: 0.6;
    border-radius: 10%;
    &:hover{
        cursor: pointer;
    }
    @media screen and (min-width: 768px){
        display: none;
    }
`

const CloseIcon = styled(RiCloseFill)`
    position: absolute;
    top:2%;
    right:2%;
    font-size: 4rem;
    background-color: transparent;
    color:aliceblue;
    opacity: 0.6;
    &:hover{
        cursor: pointer;
    }
`

const SidebarContainer = styled.div`
    width:100vw;
    height:100vh;
    z-index: 20;
    position:fixed;
    display: flex;
    transform:translateX(${({activate})=>(activate ? '(0)':'100vw')});
    transition: 0.5s ease-in-out;

    @media screen and (min-width: 768px){
        display: none;
    }
`

const SidebarWrapper = styled.div`
    width:50%;
    height: 100vh;
    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    } /* Chrome, Safari, Opera*/
    background:linear-gradient(to bottom, rgb(255, 83, 83), rgb(255, 210, 128));
`

const ItemContainer = styled.div`
    margin-top: 20%;
`

const Overlay = styled.div`
    background-color: rgba(36, 36, 36, 0.438);
    width:50%;
    height: 100vh;
`




const Menubar = () => {
    const [show, setShow] = useState(false);
   

    const open = () => {
        document.body.style.overflow = "hidden";
        setShow(!show);
    };

    const close = () => {
        document.body.style.overflow = "unset";
        setShow(!show);
    };

    return (
        <>
            <MenuIcon onClick={open}/>  
            <SidebarContainer activate={show}>   
                <Overlay onClick={close}/> 
                <SidebarWrapper>
                    <CloseIcon onClick={close}/>
                    <ItemContainer>
                        {SidebarData.map((item, index)=>{
                            return <SubMenu item={item} key={index}/>;
                        })}  
                    </ItemContainer>  
                </SidebarWrapper>    
            </SidebarContainer>
        </>
    )
}

export default Menubar