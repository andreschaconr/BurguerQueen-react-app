import React from "react";
import './ButtonStart.css'
import { Link } from "react-router-dom";

export  function ButtonStart(props){
    return(
        <Link to={`./domiciles`}>
           <button className='Buttonacces'>INGRESAR</button>
        </Link>
    )
}

