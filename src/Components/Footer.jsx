import React from 'react'
import insta from '../assets/insta.png'
import faceb from '../assets/facebook.png'
import pinterest from '../assets/pinterest.png'
import twitter from '../assets/twitter.png'
import { useHistory } from 'react-router-dom'
import './footer.css'

export const Footer = () => {
  const history = useHistory()
  const handleClick = () => {
    history.push('/contact')
  }
  return (
    <footer>
      <h3>HUNGRY FOR MORE? GET IN TOUCH BELOW.</h3>
      <button className='contact-button' type='button' onClick={handleClick}>Contact</button>
      <div className='social-container'>
        <a href='https://www.instagram.com/londonfoodbabes/' className='social-link'><img src={insta} className='social-icon' alt=''/></a>
        <a href='https://www.facebook.com/londonfoodbabes' className='social-link'><img src={faceb} className='social-icon' alt='' /></a>
        <a href='https://twitter.com/Londonfoodbabes' className='social-link'><img src={twitter} className='social-icon' alt='' /></a>
        <a href='https://www.pinterest.se/londonfoodbabes/' className='social-link'><img src={pinterest} className='social-icon' alt='' /></a>
      </div>
    
    </footer>
  )
}