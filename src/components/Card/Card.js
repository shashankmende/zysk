
import React from 'react'
import './Card.css'
import { FaArrowRight } from "react-icons/fa6";


const Card = () => {
  return (
    <div className='card-container'>
      <div>
        <button>New feature</button>
        <p>Check out to dashboard</p>
        <FaArrowRight size={15}/>
      </div>
    </div>
  )
}

export default Card