import React, {useState} from 'react'
import {BlogPost} from './BlogPost'
import { Header } from './Header'
import { Footer } from './Footer'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import './Styling/blog.css'

export const Blog = () => {
  const [showSignInAdmin, setShowSignInAdmin] = useState(false)
  const [showSignUpAdmin, setShowSignUpAdmin] = useState(false)

  const onSignIn = () => {
    setShowSignInAdmin(true)
  }

  const onSignUp = () => {
    setShowSignUpAdmin(true)
  }
  return (
    <>     
      <Header/>
      
      <BlogPost/>
    
      {showSignInAdmin && <SignIn />}
      {!showSignInAdmin && <button type="button" className="signin-button" onClick={onSignIn}>Admin</button>}
      {showSignUpAdmin && <SignUp />}
      {!showSignUpAdmin && <button type="button" className="signin-button" onClick={onSignUp}>New Admin</button>}
      
      <Footer />
    </>
  )
}