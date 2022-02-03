import React, { useState } from 'react';
import './Card.css'
import ProjectLogo from '../images/logo-mastercraft.svg'

const Card=({showModal})=> {
    const [bookMark,setBookMark]=useState(false);
    return (
        <div className="Card">
            <img className="ProjectLogo" src={ProjectLogo} alt=""/>
            <h2>Mastercraft Bamboo Monitor Riser</h2>
            <p>A beautiful handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className="footer">
            <button className="btn-cta" onClick={()=>showModal()}>Back this project</button>
            {/* <img src={iconBookmark} alt=""/> */}
            <span className={`iconBookmark ${bookMark?"active":""}` } onClick={()=>{setBookMark(!bookMark)}}></span>

            </div>
        </div>
    );
}

export default Card;