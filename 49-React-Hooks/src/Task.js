import React from 'react';

function Task(){


    return(  
    <div>
        <h4>
            Current amount: {}
        </h4>
        <button 
        className="ui teal button" 
        onClick={() => console.log("deduct 5 from the amount")}>
            Spend
        </button>
    </div>)
}

export default Task
