import React from 'react'

//Todo. menu for about, blog and testimonials.
//Todo. menu for London, Amsterdam, New York, sending user further down on page. 

interface Props {
  type: string;
}

const Home: React.FC<Props> = () => {
  return (
    <section>
     <header> <h1>FOOD BABES</h1>
      {/* make menu w onclick function*/}
      </header>
      <div className='presentation-box'>
      <img src='' alt=''/>
      <img src='' alt=''/>
      </div>
      <div>
        {/* make a menu  */}
        <article>
          Welcome to foodbabes
        </article>
      </div>
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
  )
}

export default Home
