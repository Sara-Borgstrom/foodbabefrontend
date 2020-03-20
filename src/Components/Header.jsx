import React, { useState} from 'react'
import {Link} from "react-router-dom";
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
              <Link to="/home">Home</Link>
            </li>
            <li className="list-item">
              <Link to="/about">About</Link>
            </li>
            <li className="list-item">
              <Link to="/blog">Blog</Link>
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
                  <Link to="/home">Home</Link>
                </li>
                <li className="burger-item">
                  <Link to="/about">About</Link>
                </li>
                <li className="burger-item">
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )

}

