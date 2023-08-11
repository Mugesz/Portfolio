import React from 'react';
import { Element } from 'react-scroll';
import Project from "../project/project";
import "./projectContainer.css";

const projectContainer = () => {

    const projects=[
        {
         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQViDOBBjWcCH8bHi8VqaFsC9H1U4ZUCDYIpA&usqp=CAU",
         title:"Tours Booking",
         desc:"booking a tour all over the world",
         link:"https://snazzy-lamington-b5b668.netlify.app"
        },

        {
         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNO3h9b28mFyrTQI6wi-GJ6r1IDShYtykwSboMUN_JRyAUgNYHINKBNMrvgwQc6RXx3U&usqp=CAU",
         title:"Drum Kit",
         desc:"I love to play drums music. I gone mad on It",
         link:"https://inspiring-blini-5a49cb.netlify.app"
        },

        {
         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_b1p506USGZmqmnH4eWCbH_Mm2hU-zqe_Lw&usqp=CAU",
         title:"Weather website",
         desc:"Creating this website Using javascript",
         link:"https://stellar-squirrel-333e23.netlify.app"
        },

        {
         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmVpLiAoamAQUqeBcyyh7jWLSANiSceRXaA&usqp=CAU",
         title:"CRUD using Javascript",
         desc:"Store files bu using javascript",
         link:"https://mellifluous-raindrop-b998d9.netlify.app/"
        },

        {
         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIgktJHiEsQdncwAhHrS4BKpAxuHZMi3e9dA&usqp=CAU",
         title:"signin signup",
         desc:"To Login and Sign in by using javascript",
         link:"https://glowing-boba-70480b.netlify.app"
        },
    ]
    
    

  return (
  <Element className='projectcontainer' id='Project'>
      <h1>Projects</h1>
      <p>Here are some projects which I done for making lives of people easy</p>

      <div className="projectcontainer_projects">
       {
       projects.map((project,index)=>{
        return(
         <Project  key={index} img={project.img} title={project.title} desc={project.desc} link={project.link} />
        )
       })
       }
      </div>
  </Element>
  )
}

export default projectContainer
