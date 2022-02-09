import React, { useState } from "react";
import './ButtonCard.css';

export function ButtonCard(){

    const [amount, setAmount] = useState(0);

    const addAmount = ()=>{setAmount(amount+1)}
    const lessAmount = ()=>{setAmount(amount-1)}


    return(
        <>
            <div className="buttonAmountChange">
                <button className="Less" onClick={lessAmount} disabled={amount===0?true:false}>-</button>
                <h3>{amount}</h3>
                <button className="Add" onClick={addAmount}>+</button>
            </div>
            
        </>
    );

}