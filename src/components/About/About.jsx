import React from 'react'
import './About.css'
import Card from '../card/Card'
import java from '../../assets/java.png'
import dsa from '../../assets/dsa.png'
import mern from '../../assets/mern.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


const About = () => {

useGSAP(()=>{
    let tl2 = gsap.timeline();
    tl2.from(".circle", {
        x:-100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
           trigger:".circle",
           scroll:"body",
           scrub:2,
           start:"top 60%",
           end:"top 30%"
        }
    })
    tl2.from(".line", {
        x:-100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
           trigger:".line",
           scroll:"body",
           scrub:2,
           start:"top 60%",
           end:"top 30%"
        }
    })
    tl2.from(".aboutdetails h1", {
        x:-100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
           trigger:".aboutdetails h1",
           scroll:"body",
           scrub:2,
           start:"top 60%",
           end:"top 30%"
        }
    })
    tl2.from(".aboutdetails ul", {
        y:100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
           trigger:".aboutdetails ul",
           scroll:"body",
           scrub:2,
           start:"top 60%",
           end:"top 30%"
        }
    })
    tl2.from(".rightabout", {
        x:100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
           trigger:".rightabout",
           scroll:"body",
           scrub:2,
           start:"top 60%",
           end:"top 30%"
        }
    })
})


  return (
    <div id='about'>
        <div className="leftabout">
            <div className="circle-line">
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
            </div>
            <div className="aboutdetails">
                <div className="personal-info">
                    <h1>Personal-info</h1>
                    <ul>
                        <li>
                            <span>Name</span> : SHUBHANGI MAHAJAN
                        </li>
                        <li>
                            <span>AGE</span> : 23
                        </li>
                        <li>
                            <span>GENDER</span> : FEMALE
                        </li>
                        <li>
                            <span>LANGUAGE KMOWN</span> : HINDI, ENGLISH
                        </li>
                    </ul>
                </div>
                <div className="education">
                    <h1>Education</h1>
                    <ul>
                        <li>
                            <span>DEGREE</span> : MCA
                        </li>
                        <li>
                            <span>BRANCH</span> : CA
                        </li>
                        <li>
                            <span>CGPA</span> : 8.2
                        </li>
                    </ul>
                </div>
                <div className="skill">
                    <h1>SKILLS</h1>
                    <ul>
                        <li>
                           FULL STACK DEVELOPMENT
                        </li>
                        <li>
                           DSA
                        </li>
                        <li>
                           JAVA
                        </li>
                    </ul>
                </div>
                 
            </div>
        </div>
        <div className="rightabout">
            <Card title={"Mern Stack Web Development"} image={mern} />
            <Card title={"JAVA"} image={java}/>
            <Card title={"DSA"} image={dsa}/>
        </div>
    </div>
  )
}

export default About