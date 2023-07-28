import React from 'react'
import { useState } from 'react'
import "./Card.css"

const Card = () => {
  const [cards]=useState([
    {
      title:"card-1",
      text:"this is the card description .you can add more details about the card here"
    },
    {
      title:"card-2",
      text:"this is the card description .you can add more details about the card here"
    },
    {
      title:"card-3",
      text:"this is the card description .you can add more details about the card hereo"
    },
    {
      title:"card-4",
      text:"this is the card description .you can add more details about the card here"
    },
    {
      title:"card-5",
      text:"this is the card description .you can add more details about the card here"
    },
    {
      title:"card-6",
      text:"this is the card description .you can add more details about the card hereo"
    },
    {
      title:"card-7",
      text:"this is the card description .you can add more details about the card here"
    },
    {
      title:"card-8",
      text:"this is the card description .you can add more details about the card here"
    },
    {
      title:"card-9",
      text:"this is the card description .you can add more details about the card hereo"
    },
    {
      title:"card-10",
      text:"this is the card description .you can add more details about the card here"
    },
    {
      title:"card-11",
      text:"this is the card description .you can add more details about the card here"
    },
  ])
  return (
          
    <div className='container'>
      
      {cards.map((element)=>(
           <div className='card-container'> 
           <h3 className='card-tittle'>{element.title}</h3>
           { <img src='https://picsum.photos/301/200' alt='Card img' className='card-img'/>}
           <p className='card-description'>
           {element.text}
           </p>
           <a href='card page' className='card-btn'>learn more</a>
           </div>
        
            ))}
    </div>
)
}

export default Card;