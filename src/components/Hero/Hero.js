

import React from 'react'
import './Hero.css'
import Card from '../Card/Card'
import { IoPlayCircleOutline } from "react-icons/io5";

import mainImg from '../images/mainImg.svg'

const Hero = () => {
  return (
    <main>
      <div className='section-main'>        
        <div className='main-top--container'>
          <Card/>
          <h1>Beautiful analytics to grow smarter</h1>
          <p>Powerful, self-serve product and growth analytics to help you convert, engage,<br/> and retain more users. Trusted by over 4,000 startups.</p>
        </div>
        <div className='buttons-container'>
            <button className='demo-btn'> <IoPlayCircleOutline/> Demo</button>
            <button className='signup-btn'>Sign up</button>
        </div>
    <div>
        <figure>
          <img src={mainImg} alt="main" />
        </figure>
        </div>
      </div>
    </main>
  )
}

export default Hero