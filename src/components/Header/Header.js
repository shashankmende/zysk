
import React from 'react'
import './Header.css'
import logo from '../images/logo.svg'
import profile from '../images/headProfile.svg'

const Header = () => {
  return (
    <header>
        <div className='section-header'>
            <ul className='navbar-brand'>
                <div className='navbar-brand-1--div'>
                <figure>
                    <img src={logo} alt="logo" />
                </figure>
                <h2>zysk</h2>
                </div>
                <li>Home</li>
                <li>Products</li>
                <li>Resources</li>
                <li>Pricing</li>

            </ul>
            <div className='header-profile--div'>
                <figure>
                    <img src={profile} alt="profile" />
                </figure>

            </div>
        </div>
    </header>
  )
}

export default Header