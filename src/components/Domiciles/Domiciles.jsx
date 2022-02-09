import React from "react";
import "./Domiciles.css";
import { NavegationMenu } from "./NavigationMenu/NavigationMenu";
import { Footer } from "../Main/Footer/Footer";

export function Domiciles() {
  return (
    <><div className="containerDomiciles">

      <div className="logoDomiciles">
        <img
          src="http://drive.google.com/uc?export=view&id=1wLxU66AxRbKI22jdeW5Zc6SYfj8lSKbF"
          alt="logo" />
      </div>
      <section className="domicilesMenu">

        <div className="navDomiciles">
          <NavegationMenu />
        </div>
      </section>
    </div>
    <Footer /></>
  );
}
