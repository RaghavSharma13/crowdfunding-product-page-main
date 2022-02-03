import React from 'react';
import './ProjectCard.css';
const ProductCard=({children,openNext,ProdName,pledgePrice,stock,index,updateChecklist,checkList})=> {
    var btnText=stock===0?"Out of Stock":"Select Reward";
    return (
        <div className="ProjectCard">
            {checkList&& 
            
            <div className="checkbox">
                <input id="checkbox" type="checkbox" value={checkList[index]} name="check" checked={checkList[index]} onChange={()=>{console.log(index);updateChecklist(index)}} />
                <label htmlFor="checkbox"></label>
            </div>}
            <div className={`ProdOverlay ${stock!==0?"":"lay"}`}></div>
            <h3 id="ProdName">{ProdName}</h3>
            {pledgePrice!==null && <h3 id="pledge">Pledge ${pledgePrice} or more.</h3>}
            <p>{children}</p>
            {stock!==null&&<div className="stock">
                <h1>{stock}</h1>
                <h3>{"left"}</h3>
            </div>}
            <button className="btn-reward" onClick={()=>openNext()}>{btnText}</button>
        </div>
    );
}

export default ProductCard;