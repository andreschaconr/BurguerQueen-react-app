import React from "react";
import "./ProductCard.css";
import { ButtonCard } from "../ButtonsCard/ButtonCard";

export function ProductCard(props) {
  const { data, amount, id } = props;
  let { name, url, description, value } = data;

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
              <h3>$......{value.toLocaleString("es-CO", {
              
              currency: "COP"
            })} </h3>
          </div>
          
          
        </div>
       
      </div>
      <ButtonCard
     key={"buttonProduct" + id}
     amount={amount}
     id={id}/>
    </div>
  );
}
