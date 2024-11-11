

import React from 'react'
import './Sispus.css'
import sispus from '../images/sispus_logo.svg'
import sispusprofile from '../images/sispus_profile.png'

const Sispus = () => {
  return (
    <div className='section-sispus'>
        <div className='container'>
                <div className='section-sispus-top--container'>
                    <figure>
                        <img src={sispus} alt="sispus" />
                    </figure>
                    <h3>Sisyphus</h3>
                </div>
                <h2>We’ve been using Untitled to kick start every new <br/>project and can’t imagine working without it.</h2>
                <div className='section-sispus-bottom--container'>
                    <figure>
                      <img src={sispusprofile} alt="sispus profile" />
                    </figure>
                    <h3>Candice Wu</h3>
                    <p>Product Manager, Sisyphus</p>
                </div>
        </div>

    </div>
  )
}

export default Sispus