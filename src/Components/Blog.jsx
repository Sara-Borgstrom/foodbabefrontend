import React, {useState} from 'react'
import {BlogPost} from './BlogPost'
import { Header } from './Header'
import { Footer } from './Footer'
import { SignIn } from './SignIn'
import './Styling/blog.css'

export const Blog = () => {
  const [showSignInAdmin, setShowSignInAdmin] = useState(false)

  const onSignIn = () => {
    setShowSignInAdmin(true)
  }

  return (
    <>     
      <Header/>
      
      <BlogPost/>
    
      {showSignInAdmin && <SignIn />}
      {!showSignInAdmin && <button type="button" className="signin-button" onClick={onSignIn}>Admin</button>}
     
      <Footer />
    </>
  )
}