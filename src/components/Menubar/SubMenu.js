import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

let size;

const MenuContainer = styled.div`  
    width: 100%;
    height:${({sub})=>(sub?`${size}px`:'100px')};
    overflow: hidden;
    transition: 0.5s ease-in-out;
`

const MainMenuContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:20px;
    list-style: none;
    height: 100px;
    text-decoration: none;
    font-size: 1.5rem;
    color:aliceblue;
    
    
    &:hover{
        cursor: pointer;
    }
`

const SidebarLabel = styled.span`
    margin-left: 10px;
`

const DropDown = styled.div`
    background:#ffac99;
    height: 100px;
    padding-left:3rem;
    display:flex;
    align-items: center;
    color: aliceblue;
    font-size: 1rem;
`



const SubMenu = ({item}) => {
    const [sub, setSub] = useState(false);
    const showSub = () => {
        setSub(!sub);
    }
    size = (item.sub.length+1) * 100;

    return(
        <>
            <MenuContainer sub={sub} size={size}>
                <MainMenuContainer onClick={item.sub && showSub}>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                    {item.sub && sub 
                        ? item.iconOpened
                        : item.sub
                        ? item.iconClosed
                        : null
                    }
                </MainMenuContainer>
                {item.sub.map((item, index)=>{
                        return (
                            <DropDown key={index}>
                                {item.icon}
                                <SidebarLabel>{item.title}</SidebarLabel>
                            </DropDown>
                        )
                })}
            </MenuContainer>
        </>
    )
}

export default SubMenu
