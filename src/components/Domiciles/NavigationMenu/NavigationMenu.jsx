import React from "react";
import './NavigationMenu.css'
import { CardsMenu } from "./CardsMenu/CardsMenu";



export function NavegationMenu(props){

 

    return(
        <div className="menu">
            <CardsMenu/>
        </div>
        
    );
}