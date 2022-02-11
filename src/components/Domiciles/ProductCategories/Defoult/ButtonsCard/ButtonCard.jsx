import React, { useState } from "react";

import './ButtonCard.css';


export function ButtonCard(props){
     

    const {amount, id}=props

    const [quantity, setQuantity] = useState(amount);

    const addAmount = ()=>{setQuantity(quantity+1) 
    };
    const lessAmount = ()=>{setQuantity(quantity-1)};
   
   
    
    return(
        <>
            <div className="buttonAmountChange">
                <button className="Less" onClick={lessAmount} disabled={quantity===0?true:false}>-</button>
                <h3>{quantity}</h3>
                <button className="Add" onClick={addAmount}>+</button>
            </div>
            
        </>
    );

}