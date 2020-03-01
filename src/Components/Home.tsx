import React from 'react'
import './home.css'

//Todo. menu for London, Amsterdam, New York, sending user further down on page - connect. 
interface Props {
  
}

export const Home: React.FC<Props> = () => {
  return (
    <div>
      <section>
        <header> 
          <h1>FOOD BABES</h1>
          <div className='nav-bar'>
            <ul className='nav'>
              <li> <a href='/about'> About </a></li>
              <li> <a href='/blog'> Blog </a></li>
              <li> <a href='/testimonials'> Testimonials </a></li>
              <li> <a href='/contact'> Contact us </a></li>
            </ul>
          </div>
        </header>
        <div className='presentation-box'>
          <img src='' alt=''/>
          <img src='' alt=''/>
        </div>
        <section className='welcome-container'>
          {/* connect to same page  */}
          <div className='nav-bar'>
            <ul className='nav'>
              <li> <a href=''> London </a></li>
              <li> <a href=''> Amsterdam </a></li>
              <li> <a href=''> New York </a></li>
            </ul>
          </div>
          <article>
          Welcome to foodbabes
          </article>
        </section>
        <main className='city-container'>
          <div className='london-box'>
            <h2>London Food Babes</h2>
            <img src='' alt=''/>
          </div>
          <div className='amsterdam-box'>
            <h2>Amsterdam Food Babes</h2>
            <img src='' alt=''/>
          </div>
          <div className='newyork-box'>
            <h2>New York Food Babes</h2>
            <img src='' alt=''/>
          </div>
        </main>
        <footer>
          <h3>HUNGRY FOR MORE? GET IN TOUCH BELOW.</h3>
          <button className='contact-button' type='button'>Contact</button>
          <div className='social-container'>
            <a href='' className='social-link'><img src='' alt='' /></a>
            <a href='' className='social-link'><img src='' alt='' /></a>
            <a href='' className='social-link'><img src='' alt='' /></a>
            <a href='' className='social-link'><img src='' alt='' /></a>
          </div>
        </footer>
      </section>
    </div>
  )
}

export default Home
