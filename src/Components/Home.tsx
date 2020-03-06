import React from 'react'
import './home.css'
import img1 from '../assets/img1.jpg'
import insta from '../assets/insta.png'
import faceb from '../assets/facebook.png'
import pinterest from '../assets/pinterest.png'
import twitter from '../assets/twitter.png'


interface Props {
  
}

const startmenu = {
  title: "Food Babes",
  menuList: [
    "About",
    "Blog",
    "Testimonails",
    "Contact us"
  ]
};

const welcome = {
  title: "Welcome to Food Babes",
  headText:"WELCOME TO FOOD BABES - YOUR GUIDE TO THE VERY BEST RESTAURANTS IN LONDON, NEW YORK AND AMSTERDAM. FOLLOW US ON INSTAGRAM TO KEEP UP TO DATE WITH OUR LATEST DISCOVERIES. ",
  cityList: [
    "London",
    "Amsterdam",
    "New York"
  ]
}

export const Home: React.FC<Props> = () => {
  return (
    <div>
      <section>
        <header> 
          <h1>FOOD BABES</h1>
          <div className='nav-bar'>
            <div className='nav'>
              <a href='/about'> {startmenu.menuList[0]} </a>
              <a href='/blog'> {startmenu.menuList[1]} </a>
              <a href='/testimonials'> {startmenu.menuList[2]} </a>
              <a href='/contact'> {startmenu.menuList[3]}</a>
            </div>
          </div>
        </header>
        <div className='presentation-box'>
          <h1>{welcome.title}</h1>
          <h3>{welcome.headText}</h3>
          <img src={img1} style={{width: 550, height:550 }} alt=""/>
        </div>
        <section className='welcome-container'>
          <div className='nav-bar'>
            <a href='london-header-on-home'>{welcome.cityList[0]}</a>
            <a href='amsterdam-header-on-home'>{welcome.cityList[1]}</a>
            <a href='newyork-header-on-home'>{welcome.cityList[2]}</a>
          </div>
        </section>
        <main className='city-container'>
          <div className='london-box'>
            <h2 id='london-header-on-home'>London Food Babes</h2>
            <img src='' alt=''/>
          </div>
          <div className='amsterdam-box'>
            <h2 id='amsterdam-header-on-home'>Amsterdam Food Babes</h2>
            <img src='' alt=''/>
          </div>
          <div className='newyork-box'>
            <h2 id='newyork-header-on-home'>New York Food Babes</h2>
            <img src='' alt=''/>
          </div>
        </main>
        <footer>
          <h3>HUNGRY FOR MORE? GET IN TOUCH BELOW.</h3>
          <button className='contact-button' type='button'>Contact</button>
          <div className='social-container'>
            <a href='https://www.instagram.com/londonfoodbabes/' className='social-link'><img src={insta} className='social-icon' alt=''/></a>
            <a href='https://www.facebook.com/londonfoodbabes' className='social-link'><img src={faceb} className='social-icon' alt='' /></a>
            <a href='https://twitter.com/Londonfoodbabes' className='social-link'><img src={twitter} className='social-icon' alt='' /></a>
            <a href='https://www.pinterest.se/londonfoodbabes/' className='social-link'><img src={pinterest} className='social-icon' alt='' /></a>
          </div>
          
        </footer>
      </section>
    </div>
  )
}

export default Home
