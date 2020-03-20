import React, { useState} from 'react'
import './Styling/header.css'

export const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false)
  const toggleBurgerMenu = () => setShowBurgerMenu(!showBurgerMenu)
  return (
    <>
      <header> 
        <nav>
          <div>
            <h1>FOOD BABES</h1>
          </div>
          <ul className="nav-list">
            <li className="list-item">
              <a href="/home">Home</a>
            </li>
            <li className="list-item">
              <a href="/about">About</a>
            </li>
            <li className="list-item">
              <a href="/blog">Blog</a>
            </li>
            <li className="list-item">
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <div className="toggle-burger-menu">
            <button className="burger" onClick={toggleBurgerMenu}>
              <div className="burger-list-item" />
              <div className="burger-list-item" />
              <div className="burger-list-item" />
            </button>
            <div className={`burger-list ${showBurgerMenu ? "show" : ""}`}>
              <ul className="burger-nav-list">
                <li className="burger-item">
                  <a href="/home">Home</a>
                </li>
                <li className="burger-item">
                  <a href="/about">About</a>
                </li>
                <li className="burger-item">
                  <a href="/blog">Blog</a>
                </li>
                <li className="burger-item">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            </div>
        </nav>
      </header>
    </>
  )

}

