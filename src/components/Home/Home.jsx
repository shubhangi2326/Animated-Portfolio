import React from "react";
import man from '../../assets/man.png'
import "./Home.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {

useGSAP(()=>{
  let tl1 = gsap.timeline();
  tl1.from(".line1",{
      y:80,
      duration:1,
      opacity:0
  })
  tl1.from(".line2",{
      y:80,
      duration:1,
      opacity:0
  })
  tl1.from(".line3",{
      y:80,
      duration:1,
      opacity:0
  })
  tl1.from(".right-home img",{
      x:200,
      duration:1,
      opacity:0
  })
})

  return (
    <div id="home">
      <div className="left-home">
        <div className="home-details">
          <div className="line1">I'M</div>
          <div className="line2">SHUBHANGI MAHAJAN</div>
          <div className="line3">SOFTWARE DEVELOPER</div>
            <button>HERE ME</button>
        </div>
      </div>
      <div className="right-home">
         <img src={man} alt="" />
      </div>
    </div>
  );
};

export default Home;
