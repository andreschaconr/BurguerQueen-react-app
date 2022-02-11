import React from "react";
import './Main.css';
import { Outlet } from "react-router-dom";





export function Main(){
    

    return(
        <div className="container">
       
        <Outlet/>
       
        </div>
    );
}