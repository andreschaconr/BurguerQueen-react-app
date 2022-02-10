
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Routes, Route, Navigate, HashRouter} from "react-router-dom";
import {Main} from "./components/Main/Main"
import {Home} from "./components/Home/Home"
import { Domiciles } from "./components/Domiciles/Domiciles";
import { Buycart } from "./components/shop/Buycart";
import {DefaultCategory} from "./components/Domiciles/ProductCategories/Defoult/Default";
import {Categories} from "./components/Domiciles/ProductCategories/Data/Categories"

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Main/>}>
          <Route path="/" element={<Home/>} />
        
          <Route path="/domiciles" element={<Domiciles/>}>
            
          
            </Route>
            <Route path="/domiciles/beefburguers" element={<DefaultCategory json={Categories[0]}/>}/>
            <Route path="/domiciles/chickenburguers" element={<DefaultCategory json={Categories[1]}/>}/>
            <Route path="/domiciles/hotdogs" element={<DefaultCategory json={Categories[2]}/>}/>
            <Route path="/domiciles/salchipapas" element={<DefaultCategory json={Categories[3]}/>}/>
            <Route path="/domiciles/mazorcadas" element={<DefaultCategory json={Categories[4]}/>}/>
            <Route path="/domiciles/meats" element={<DefaultCategory json={Categories[5]}/>}/>
            <Route path="/domiciles/children" element={<DefaultCategory json={Categories[6]}/>}/>
            <Route path="/domiciles/starters" element={<DefaultCategory json={Categories[7]}/>}/>
            <Route path="/domiciles/combos" element={<DefaultCategory json={Categories[8]}/>}/>
            <Route path="/domiciles/acompa" element={<DefaultCategory json={Categories[9]}/>}/>
            <Route path="/domiciles/desserts" element={<DefaultCategory json={Categories[10]}/>}/>
            <Route path="/domiciles/drinks" element={<DefaultCategory json={Categories[11]}/>}/>
            <Route path="/domiciles/shop" element={<Buycart/>} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

