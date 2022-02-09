import React from "react";
import "./ProductCard.css";
import { ButtonCard } from "../ButtonsCard/ButtonCard";

export function ProductCard(props) {
  const {name, url, description, value }=props;

  return (
    <div className="productCard">
      <div className="productName">
          <h3>{name}</h3>
      </div>
      <div className="productFullDescription">
        <div className="productImage">
            <img src={url} alt={"Imagen "+name} />
        </div>
        <div className="productInfo">
          <div className="productDescriptionText">
              <p>{description}</p>
          </div>
          <div className="productValue">
              <h3>$......{value} </h3>
          </div>
          
          
        </div>
       
      </div>
      <ButtonCard/>
    </div>
  );
}
