import React from 'react'
import './Styling/header.css'

export const Header = () => {
  return (
    <>
      <header> 
        <nav>
          <div>
            <h1>FOOD BABES</h1>
          </div>
          <ul className='nav-list'>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <div className='burger'>
            <div className='menu1'></div>
            <div className='menu2'></div>
            <div className='menu3'></div>
          </div>
        </nav>
     
      </header>
      <script src='./Slide.jsx'></script>
    </>
  )

}

