import React from 'react'
import Card from '../card/Card';
import './Projects.css'
import va from '../../assets/va.png'
import tti from '../../assets/tti.png'
import ise from '../../assets/ise.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

  useGSAP(()=>{
     gsap.from(".para", {
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
         trigger:".para",
         scroll:"body",
         scrub:2,
         start:"top 80%",
         end:"top 30%"
      }
  })
     gsap.from(".slider", {
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
         trigger:".slider",
         scroll:"body",
         scrub:2,
         start:"top 80%",
         end:"top 30%"
      }
  })
  })


  return (
    <div id='project'>
        <h1 className="para">1+ Years Experienced in Projects</h1>
        <div className="slider">
            <Card title={"VIRTUAL ASSISTANT"} image={va}/>
            <Card title={"AI TEXT TO IMAGE"} image={tti} />
            <Card title={"IMAGE SEARCH ENGINE"} image={ise} />
        </div>
    </div>
  )
}

export default Projects;