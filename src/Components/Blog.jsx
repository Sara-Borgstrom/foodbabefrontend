import React, {useState} from 'react'
import {BlogPost} from './BlogPost'
import { Header } from './Header'
import { Footer } from './Footer'
import { SignIn } from './SignIn'
import './Styling/blog.css'
//Preview and category page
// *The brunch guide. *The afternoon tea guide. *The sunday rost guide. *The dinner guide. *The going out guide.

export const Blog = ({title, description, link, type, _id}) => {
  const [showSignInAdmin, setShowSignInAdmin] = useState(false)

  const onSignIn = () => {
    setShowSignInAdmin(true)
  }

  return (
    <>     
      <Header/>
 
      <h1 className="">Brunch</h1>

      <BlogPost 
        key={_id}
        type={type}
        title={title}
        description={description}
        link={link}/>

      {showSignInAdmin && <SignIn />}
      {!showSignInAdmin && <button type='button' className='signin-button' onClick={onSignIn}>Admin</button>}
     
      <Footer />
    </>
  )
}