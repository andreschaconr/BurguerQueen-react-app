import React from "react";
import './Default.css'
import { ProductCard } from "./ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { Footer } from "../../../Main/Footer/Footer";
import { Header } from "../../../Main/Header/Header";

export function DefaultCategory(props){

    const {json}=props;

    return(
        <>
        <Header/>
        <section className="categorySection">
            <div className="selectCategory">         
                <h2>{json.name}</h2>     
            </div>
            <div className="productsList">
                {json.products.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                           data={product}
                           amount={0}/>
                    );
                })}
            </div>
            <Link to="/domiciles/shop">VER ORDEN</Link>
        </section>
        <Footer />
        </>
    );
}