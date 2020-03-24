import React, {useState} from 'react'
import './Styling/signin.css'
import {Admin} from './Admin'

export const SignIn = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [signedIn, setSignedIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [user, setUser] = useState({})
  const URL = 'https://foodbabe.herokuapp.com/sessions'

  const fetchProfile = async() => {
    const response = await
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ name, password}),
      headers: { 'Content-Type': 'application/json' }
    })
     
    const json = await response.json()
    return json
  }
 
  const handleSubmit = (event) => {
    event.preventDefault()
    
    fetchProfile().then(data => {
      setName('')
      setPassword('')
       
      if (data.notFound) {
        setErrorMessage('Username or password is invalid')
        setSignedIn(false)
      } else {
        window.localStorage.setItem('accessToken', data.accessToken)
        setErrorMessage('')
        setSignedIn(true)
        setUser(data)
      }
    })   
  }
   
  const signOut = () => {
    window.localStorage.clear()
    setSignedIn(false)
  }
  return (
    <>
      {signedIn &&
  <Admin userSignedIn={signedIn} onClick={signOut} user={user}/>}
      {errorMessage && <p>{errorMessage}</p>}
      {!signedIn && 
 <>
   <form className="signin-form" onSubmit={handleSubmit} >
     <h2>Sign in</h2>
     <label>

       <input type = "name"
         className="input-box"
         placeholder="Name"
         value = {name}
         onChange = {(event) => {setName(event.target.value)}} /> 
     </label>
     <label>    
       <input type="password"
         placeholder="Password"
         className="input-box"
         value = {password}
         onChange = {(event) => {setPassword(event.target.value)}} /> 
     </label> 
     <button className="signin-button" type="submit">Sign in </button> 
   </form> 
 </>}
    </>

  )
}