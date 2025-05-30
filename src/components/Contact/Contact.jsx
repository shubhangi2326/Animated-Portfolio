import React from 'react'
import './Contact.css'
import contact from '../../assets/contact.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {

  useGSAP(()=>{
    gsap.from(".left-contact img", {
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
         trigger:".left-contact img",
         scroll:"body",
         scrub:2,
         start:"top 80%",
         end:"top 30%"
      }
  })
    gsap.from("form", {
      x:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
         trigger:"form",
         scroll:"body",
         scrub:2,
         start:"top 80%",
         end:"top 30%"
      }
  })

  })
  return (
    <div id='contact'>
      <div className="left-contact">
        <img src={contact} alt="" />
      </div>
      <div className="right-contact">
           <form action="https://formspree.io/f/mblglyjb" method="POST">
              <input type="text" name="Username" id="username" placeholder='Username'/>
              <input type="email" name="Email" id="" placeholder='Email'/>
              <textarea name="massage" id="textarea" placeholder='message'></textarea>
              <input type="submit" id='btn' value="Submit" />
           </form>
      </div>
    </div>
  )
}

export default Contact