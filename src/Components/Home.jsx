import React from 'react'
import './Styling/home.css'
import {Header} from './Header'
import {Footer} from './Footer'
import img1 from '../assets/img1.jpg'
import lon1 from '../assets/lon1.jpeg'
import ams1 from '../assets/ams1.jpeg'
import nyc1 from '../assets/nyc1.jpeg'
import FBlogo from '../assets/FBlogo.png'

const welcome = {
  title: "Welcome to Food Babes",
  subTitle: 'Food Babes',
  headText:"WELCOME TO FOOD BABES - YOUR GUIDE TO THE VERY BEST RESTAURANTS IN LONDON, NEW YORK AND AMSTERDAM. FOLLOW US ON INSTAGRAM TO KEEP UP TO DATE WITH OUR LATEST DISCOVERIES. ",
  cityList: [
    "London",
    "Amsterdam",
    "New York"
  ]
}

export const Home = () => {

  return (
    <div>
      <section>
        <Header />
        <div className='first-part'>
          {/* Find a better way to do this */}
          <div className='presentation-box'>
           
            <div className='image-container'>
              <div className='logo-container'>
                <img src={FBlogo} className='presentation-logo' alt=""/> 
                <h1>{welcome.title}</h1>
              </div>
              <img src={img1} className='presentation-img' alt=""/> 
            </div>
            <div className='text-box'>
              <div className='location-nav'>
                <a href='#london-header-on-home'>{welcome.cityList[0]}</a>
                <a href='#amsterdam-header-on-home'>{welcome.cityList[1]}</a>
                <a href='#newyork-header-on-home'>{welcome.cityList[2]}</a>
              </div>              
              <h3 className='text-block'>{welcome.headText}</h3>
            </div>
          </div>

          <div className='london-box'>
            <h2 id='london-header-on-home'className='lon-title'>{welcome.subTitle} {welcome.cityList[0]}</h2>
            <img src={lon1}  className='city-img'alt=''/>
          </div>
        </div>
        <div className='city-container'>
          <div className='amsterdam-box'>
            <h2 id='amsterdam-header-on-home' className='ams-title'>{welcome.subTitle} {welcome.cityList[1]} </h2>
            <img src={ams1} className='city-img' alt=''/>
          </div>
          <div className='newyork-box'>
            <h2 id='newyork-header-on-home' className='-title'>{welcome.subTitle} {welcome.cityList[2]}</h2>
            <img src={nyc1} className='city-img' alt=''/>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}