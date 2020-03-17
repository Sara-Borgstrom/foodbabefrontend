import React from 'react'
import './header.css'

const startmenu = {
  title: "Food Babes",
  menuList: [
    "About",
    "Blog",
    "Testimonails",
    "Contact us"
  ]
};

export const Header = () => {

  return (
    <header> 
      <div className='phone-header'>
        <h1 className='head-title'>FOOD BABES</h1>
        <div className='hamburger'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className='desktop-header'>
        <h1 className='head-title'>FOOD BABES</h1>
        <div className='nav-bar'>
          <nav className='nav'>
            <a href='/about'> {startmenu.menuList[0]} </a>
            <a href='/blog'> {startmenu.menuList[1]} </a>
            <a href='/testimonials'> {startmenu.menuList[2]} </a>
            <a href='/contact'> {startmenu.menuList[3]}</a>
          </nav>
        </div>
      </div>
    </header>
   
  )
}
