import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

export function NavBar(props){
    

    return(
        <ul className="NavBar">
            <Link to="/domiciles"><img src="http://drive.google.com/uc?export=view&id=10nFUIWX9k_DiPGqiPfxcQ1dhTj0ggn3S" alt="shopcar"/></Link>
           
            <Link to="/domiciles/shop"><img src="http://drive.google.com/uc?export=view&id=1_eSLY3rpdmxZfH-OK2bGrWRlpS3U1tpr" alt="shopcar"/></Link>
        </ul>
    );
}
