import React from "react";
import "./ProjectDescription.css";
import ProductCard from './ProductCard';
const ProjectDescription = ({startIndex,heading,cardList,openNext,inputHandler,rewardsChecked,children}) => {
  return (
    <div className={`Description`}>
      <header id="Description-header">
        <h2>{heading}</h2>
        <p>
          {children}
        </p>
      </header>
      <main id="Description-main">
        {cardList.map((card,index)=>{
          if(index<startIndex){return null}  
          else return <ProductCard key={card.id} openNext={()=>openNext()} ProdName={card.ProdName} pledgePrice={card.pledgePrice} stock={card.stock} index={card.id} updateChecklist={(id)=>{console.log(`from desc ${id}`);inputHandler(id)}} checkList={rewardsChecked}>{card.description}</ProductCard>
        })}
      </main>
    </div>
  );
};

export default ProjectDescription;
