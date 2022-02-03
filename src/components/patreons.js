import React from 'react';
import './patreons.css'
const Patreons=()=> {
    return (
        <div className="Patreons">
            <div className="figures">
                <h1>$89,914</h1>
                <h4>of $100,000 backed</h4>
            </div>
            <div className="figures">
                <h1>5,007</h1>
                <h4>total backers</h4>
            </div>
            <div className="figures">
                <h1>56</h1>
                <h4>days left</h4>
            </div>
            <div className="statBar"></div>
        </div>
    );
}

export default Patreons;