
import "./Home.css";
import { ButtonStart } from "./ButtonChange/ButtonStart";



export function Home() {
  

  return (
    <div className="containerHome">
      
      <section className="socialHome">
        <div className="logoHome">
          <img
            src="http://drive.google.com/uc?export=view&id=1wLxU66AxRbKI22jdeW5Zc6SYfj8lSKbF"
            alt="logo"
          />
        </div>
        <div className="storyHome">
          
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
            delectus. Mollitia itaque optio exercitationem ipsum, eos aut
            consectetur perferendis aperiam. Facere nisi amet nobis dignissimos
            cumque, pariatur ipsum et ipsam.
          </p>
          <br></br>
          <br></br>
          <br></br>
          <ButtonStart/>
        </div>

      </section>
   
    </div>
  );
}
