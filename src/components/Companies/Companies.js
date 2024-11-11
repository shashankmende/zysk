

import React from 'react'
import './Companies.css'
import boltShiftLogo from '../images/boltShiftLogo.svg'
import boltShift from '../images/boltShift.svg'
import lightBoxLogo from '../images/lightboxLogo.svg'
import lightboxtext from '../images/lightboxtext.svg'
import featherDevLogo from '../images/featherDevLogo.svg'
import featherDevText from '../images/featherDevtext.svg'


const Companies = () => {
  return (
    <div className='section-companies'>
        <div className='section--div'>
          <p>Join 4,000+ companies already growing</p>
          <div className='companies-img--container'>
            <figure>
              <img src={boltShiftLogo} alt="bolt shift" />
              <img src={boltShift} alt="bolt" />
            </figure>
            <figure>
              <img src={lightBoxLogo} alt="bolt shift" />
              <img src={lightboxtext} alt="bolt" />
            </figure>
            <figure>
              <img src={featherDevLogo} alt="bolt shift" />
              <img src={featherDevText} alt="bolt" />
            </figure>
            <figure>
              <img src={boltShiftLogo} alt="bolt shift" />
              <img src={boltShift} alt="bolt" />
            </figure>
            <figure>
              <img src={boltShiftLogo} alt="bolt shift" />
              <img src={boltShift} alt="bolt" />
            </figure>
            <figure>
              <img src={boltShiftLogo} alt="bolt shift" />
              <img src={boltShift} alt="bolt" />
            </figure>
          </div>
        </div>
    </div>
  )
}

export default Companies