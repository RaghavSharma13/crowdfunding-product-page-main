import React, { useEffect, useState } from 'react';
import './navbar.css'
import logo from '../images/logo.svg';
const Navbar=()=> {
    const [burg,setBurg]=useState(false);
    const [burgState,setBurgState]=useState([false,false]);
    const setNavDisplay=()=>{
        if(window.innerWidth<=580)
            setBurg(true);
        else
            setBurg(false);
    }
    useEffect(()=>{
        setNavDisplay()
    },[]);
    window.addEventListener('resize',setNavDisplay);
    const burgerClick=()=>{
        if(!burgState[0])
            setBurgState([true,false]);
        else setBurgState([false,true]);
    }
    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="logo"/>
            <ul className={`nav-list row ${burg?"hide":"show"}`}>
                <li>About</li>
                <li>Discover</li>
                <li>Get Started</li>
            </ul>
            <div className={`burger col ${burg?"show":"hide"} ${burgState[0]?"open":""} `} onClick={()=>burgerClick()}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`overlay ${burg?"show":"hide"} ${burgState[0]?"fade-in":burgState[1]?"fade-out":""}`}>
            <ul className="nav-list col background">
                <li>About</li>
                <li>Discover</li>
                <li>Get Started</li>
            </ul>
            </div>
        </div>
    );
}

export default Navbar;