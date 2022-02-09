import React from "react";
import './Footer.css'
import { Logofooter } from "./Logofooter/Logofooter";
import { Info } from "./Information/Info";

export function Footer(){

    return(
        <footer>
            <Logofooter/>
            <Info/>
           
            
        </footer>
    );
}