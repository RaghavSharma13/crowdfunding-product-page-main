import React, { useState } from "react";
import ProjectDescription from "./ProjectDescription";
import cardList from "./ProductList";
import "./modal.css";
import ThankYouCard from "./thankyou";


const Modal = ({ helperClass, closeModal }) => {
    // checked marks for modal page
  const [rewardsChecked, setRewardsChecked] = useState(
    new Array(cardList.length).fill(false)
  );
  const inputHandler = (id) => {
    let checklist = rewardsChecked.slice();
    checklist.forEach((check, index) => {
      if (check) checklist[index] = false;
    });
    checklist[id] = true;
    setRewardsChecked(checklist);
    console.log(rewardsChecked);
  };
  //check funcitonality end
  
  // function to show the next step after modal
  const [finishModal, setFinishModal] = useState(false);
  const changeFinish = () => {
    setFinishModal(!finishModal);
  };
  if (finishModal)
    return (
      <ThankYouCard finishModal={finishModal} closeModal={closeModal} changeFinish={changeFinish}/>
    );
    return (
      <div
        className={`modalCard ${
          helperClass !== "" ? "active" : ""
        } ${helperClass}`}
      >
        <div className="close" onClick={() => closeModal()}></div>
        <ProjectDescription
          startIndex={0}
          heading={"Back this project"}
          cardList={cardList}
          openNext={changeFinish}
          inputHandler={(id)=>inputHandler(id)}
          rewardsChecked={rewardsChecked}
        >
          Want to support us in bringing Mastercraft Bamboo Monitor Riser in the
          world?
        </ProjectDescription>
      </div>
    );
};

export default Modal;
