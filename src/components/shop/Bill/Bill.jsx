import React from "react";
import './Bill.css';

export function Bill(){

    return(
        <>
        
        <div className="Billlogo">
        <img
          src="http://drive.google.com/uc?export=view&id=14oYRlxmEJT7ypJNU6jPa2nhGJaiInOtN"
          alt="logocartshop" width={120} height={120}/>
        </div>
        <div className = "Billcontainer">
        
           <div className="Total">
               <h2>TOTAL            $</h2>
           </div>
        </div>
    
        </>
    );
}