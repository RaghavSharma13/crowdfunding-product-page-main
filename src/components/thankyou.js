import React from 'react';
import check from "../images/icon-check.svg";
const ThankYouCard=({finishModal,closeModal,changeFinish})=> {
    return (
        <div className={`thankYouCard ${finishModal ? "fade-in" : "fade-out"}`}>
        <img src={check} alt="" />
        <h2>Thanks for your support!</h2>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button
          className="btn-reward"
          onClick={() => {
            closeModal();
            changeFinish();
          }}
        >
          Got it!
        </button>
      </div>
    );
}

export default ThankYouCard;