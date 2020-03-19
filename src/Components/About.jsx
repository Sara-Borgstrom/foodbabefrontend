import React from 'react'
import jess from '../assets/Jess.jpg'
import lovisa from '../assets/Lovisa.jpg'
import nina from '../assets/Nina.jpg'
import './Styling/about.css'

import { Header } from './Header'
import { Footer } from './Footer'

export const About = () => {
  return (
    <>
      <Header />
      <section>
        <div className='babe-text'><h1>Meet the babes</h1>
          <h3>the babes are eating their way through London
          (and Amsterdam and New York)
          </h3>
          <p>FOR ALL ENQUIRIES AND COLLABORATION REQUESTS EMAIL LONDONFOODBABES@OUTLOOK.COM </p>
        </div>
        <div className='babe-container'>
          <div className='babe-box'>
            <img src={nina} alt=""/>
            <a href='https://www.instagram.com/ninavlatkovic/'><p className='babe-name'>NINA</p></a>
          </div>
          <div className='babe-box'>
            <img src={lovisa} alt=""/>
            <a href='https://www.instagram.com/lovisatullgren/'><p className='babe-name'>LOVISA</p></a>
          </div>
          <div className='babe-box'>
            <img src={jess} alt=""/>
            <a href='https://www.instagram.com/ajessiem/'><p className='babe-name'>JESS</p></a>
          </div>
        </div>
        <div className='social-container'>
          <a href='https://www.instagram.com/londonfoodbabes/' className='social-link'><p>London Food Babes</p></a>
          <a href='https://www.instagram.com/amsterdamfoodbabes/' className='social-link'><p>Amsterdam Food Babes</p></a>
          <a href='https://www.instagram.com/newyorkfoodbabes/' className='social-link'><p>New York Food Babes</p></a>
        </div>
      </section>
      <Footer/>
    </>
  )
}