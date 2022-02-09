import React from "react";
import './Info.css'

export function Info(){

    return(
            <><div className="Info">
            <div className="social">
                <ul className="social-net">
                    <img className="socialicon"  src="http://drive.google.com/uc?export=view&id=1GFiqLpVVpYsct6-PgcNn--5S9h9NOQ-j" alt="location" />
                    <img className="socialicon"src="http://drive.google.com/uc?export=view&id=1GPPeCIJ9J08XxfojLLCjgR-rnICUFUBh" alt="phone" />
                    <img className="socialicon"src="http://drive.google.com/uc?export=view&id=1OF-WLi0rmtx-F2u4eD2Hd9u9vaMU2Jj9" alt="whatsapp" />
                    <img className="socialicon"src="http://drive.google.com/uc?export=view&id=1iWjt3F7eNGL4UPUeMhzsyO7jlQNxanRW" alt="instagram" />
                </ul>
            </div>
            </div>
        <div>
                <ul className="textsocial-net">
                    <p className="socialtext">Calle 8sur #40D-18<br/>Ciudad Montes</p>
                    <p className="socialtext" >4916311</p>
                    <p className="socialtext">3124480213</p>
                    <p className="socialtext">#queenhamburguesart</p>

                </ul>

            </div></>
        
    );
}