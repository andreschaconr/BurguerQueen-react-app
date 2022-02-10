import React from "react";
import './Buycart.css';
import { Footer } from '../Main/Footer/Footer';
import { Header } from '../Main/Header/Header';
import { Bill } from "./Bill/Bill";



export function Buycart(){

    return(
        <>
        <Header />
        <div className="Buycart">
            <Bill/>
        </div>
        <Footer />
        </>
    );
}