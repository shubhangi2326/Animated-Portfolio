import React, { useRef } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {

    let menu = useRef();
    let mobile = useRef();

    useGSAP(()=>{
       let tl = gsap.timeline();
       tl.from("nav h1", {
          y:-100,
          duration:1,
          opacity:0
       })
       tl.from("nav ul li", {
          y:-100,
          duration:1,
          opacity:0,
          stagger:1
       })
    });
   
   
 return (
    <nav>
        <h1>PORTFOLIO</h1>
        <ul className='desktop-menu'>
            <Link to='home' activeClass='active' smooth={true} duration={500} spy={true}><li>Home</li></Link>
            <Link to='about' activeClass='active' smooth={true} duration={500} spy={true}><li>About</li></Link>
            <Link to='project' activeClass='active' smooth={true} duration={500} spy={true}><li>Project</li></Link>
            <Link to='contact' activeClass='active' smooth={true} duration={500} spy={true}><li>Contact</li></Link>
        </ul>
        <div className="hemburger" ref={menu} onClick={()=>{
            mobile.current.classList.toggle("activemobile");
            menu.current.classList.toggle("activemenu");
        }}>
             <div className="ham"></div>
             <div className="ham"></div>
             <div className="ham"></div>
        </div>
        <ul className='mobile-menu' ref={mobile}>
            <Link to='home' activeClass='active' smooth={true} duration={500} spy={true}><li>Home</li></Link>
            <Link to='about' activeClass='active' smooth={true} duration={500} spy={true}><li>About</li></Link>
            <Link to='contact' activeClass='active' smooth={true} duration={500} spy={true}><li>Contact</li></Link>
            <Link to='project' activeClass='active' smooth={true} duration={500} spy={true}><li>Project</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar;