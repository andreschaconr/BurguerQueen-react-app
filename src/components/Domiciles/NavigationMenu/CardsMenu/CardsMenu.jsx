import React from 'react';
import './CardsMenu.css';
import { Link } from "react-router-dom";



export function CardsMenu(){

    

    return(
      
           <><div className='cardcategory'>
            <div className='namecategory'>
                <p>HAMBURGUESAS DE CARNE</p>
            </div>
            <div className='imgcategory'>
                <img src="http://drive.google.com/uc?export=view&id=1cAW6WAbhWQjA1tczE2eQC60Vi-aLNjsR"
                    alt={"imagen de Hamburguesas de carne"} />
            </div>
            <div className='pathcategory'>
                <Link to={`./beefburguers`}>VER PRODUCTOS</Link>
            </div>
            </div>

            <div className='cardcategory'>
                <div className='namecategory'>
                    <p>HAMBURGUESAS DE POLLO</p>
                </div>
                <div className='imgcategory'>
                    <img src="http://drive.google.com/uc?export=view&id=1l-2-3DVJxK83WUX6tqFns9ieNpsUtlXY"
                        alt={"imagen de Hamburguesas de pollo"} />
                </div>
                <div className='pathcategory'>
                    <Link to={`./chickenburguers`}>VER PRODUCTOS</Link>
                </div>
            </div>

            <div className='cardcategory'>
               <div className='namecategory'>
               <p>PERROS CALIENTES</p>
               </div>
               <div className='imgcategory'>
               <img src="http://drive.google.com/uc?export=view&id=1NevBdKxpRZhqSGNtEQvK1BQjCqypcMl-" 
                   alt={"imagen de perros calientes"}/>
               </div>
               <div className='pathcategory'>
               <Link to={`./hotdogs`}>VER PRODUCTOS</Link>
               </div>
           </div>

           <div className='cardcategory'>
               <div className='namecategory'>
               <p>MAZORCADAS</p>
               </div>
               <div className='imgcategory'>
               <img src="http://drive.google.com/uc?export=view&id=1JswMI8Nc0Z7MsiLE9tSeJGlMSVDk9vC9" 
                   alt={"imagen de mazorcadas"}/>
               </div>
               <div className='pathcategory'>
               <Link to={`./mazorcadas`}>VER PRODUCTOS</Link>
               </div>
           </div>

           <div className='cardcategory'>
               <div className='namecategory'>
               <p>SALCHIPAPAS</p>
               </div>
               <div className='imgcategory'>
               <img src="http://drive.google.com/uc?export=view&id=1wOpwpHiXQFygaqbDxcDEWQniHo83Cuyy" 
                   alt={"imagen de salchipapas"}/>
               </div>
               <div className='pathcategory'>
               <Link to={`./salchipapas`}>VER PRODUCTOS</Link>
               </div>
           </div>

           <div className='cardcategory'>
               <div className='namecategory'>
               <p>CARNES</p>
               </div>
               <div className='imgcategory'>
               <img src="http://drive.google.com/uc?export=view&id=1nAe5k_srT1gwTBVNaB9VSfPKyqcPHQ3F" 
                   alt={"imagen de carnes"}/>
               </div>
               <div className='pathcategory'>
               <Link to={`./meats`}>VER PRODUCTOS</Link>
               </div>
           </div>

           <div className='cardcategory'>
               <div className='namecategory'>
               <p>MENU INFANTIL</p>
               </div>
               <div className='imgcategory'>
               <img src="http://drive.google.com/uc?export=view&id=1uyX-KGzlExg8uzqNMeaJi5pGiZRpp97C" 
                   alt={"imagen de menu infantil"}/>
               </div>
               <div className='pathcategory'>
               <Link to={`./children`}>VER PRODUCTOS</Link>
               </div>
           </div>

           <div className='cardcategory'>
               <div className='namecategory'>
               <p>ENTRADAS</p>
               </div>
               <div className='imgcategory'>
               <img src="http://drive.google.com/uc?export=view&id=1NGFL5s7GRxQnEkEFi8BNRfBD6RpiT0ut" 
                   alt={"imagen de entradas"}/>
               </div>
               <div className='pathcategory'>
               <Link to={`./starters`}>VER PRODUCTOS</Link>
               </div>
           </div>

           <div className='cardcategory'>
               <div className='namecategory'>
               <p>COMBOS</p>
               </div>
               <div className='imgcategory'>
               <img src="http://drive.google.com/uc?export=view&id=1UcJvYts612PH00OT27bFInAVbHJKf1tc" 
                   alt={"imagen de combos"}/>
               </div>
               <div className='pathcategory'>
               <Link to={`./combos`}>VER PRODUCTOS</Link>
               </div>
           </div>

           <div className='cardcategory'>
               <div className='namecategory'>
               <p>ACOMPAÑAMIENTOS</p>
               </div>
               <div className='imgcategory'>
               <img src="http://drive.google.com/uc?export=view&id=1Cg0Oy2hSFeqzw_ukRt4XJ40BwNFkiXN-" 
                   alt={"imagen acompañamientos"}/>
               </div>
               <div className='pathcategory'>
               <Link to={`./acompa`}>VER PRODUCTOS</Link>
               </div>
           </div>

           <div className='cardcategory'>
               <div className='namecategory'>
               <p>POSTRES</p>
               </div>
               <div className='imgcategory'>
               <img src="http://drive.google.com/uc?export=view&id=1HTGBQnsiv5TS6KD-E9VaDhhqmAcRvSnb" 
                   alt={"imagen de postres"}/>
               </div>
               <div className='pathcategory'>
               <Link to={`./desserts`}>VER PRODUCTOS</Link>
               </div>
           </div>

           <div className='cardcategory'>
               <div className='namecategory'>
               <p>BEBIDAS</p>
               </div>
               <div className='imgcategory'>
               <img src="http://drive.google.com/uc?export=view&id=1WjAViHF_CmNWFqzCrsgU6hF_Gc0JY8ge" 
                   alt={"imagen de bebidas"}/>
               </div>
               <div className='pathcategory'>
               <Link to={`./drinks`}>VER PRODUCTOS</Link>
               </div>
           </div>
            </>
    );
}