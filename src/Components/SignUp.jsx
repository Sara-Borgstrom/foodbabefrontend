import React, {useState} from 'react'

const URL = 'https://foodbabe.herokuapp.com/users'

export const SignUp = (props) => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [signedUp, setSignedUp] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({name: name, password: password}),
      headers: {'Content-Type': 'application/json'}
    }).then(() => {
      setSignedUp(true)
      setName('')
      setPassword('')
    })
      .catch((err) => {console.log('error:', err)})
  }

  return(
    <>
      <form className='signup-container' onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <label>
          <input required className='signup-input' type='text'placeholder='Name' value={name} onChange={(event)=> {setName(event.target.value)}} />
        </label>
        <label>
          <input required className='signup-input' type='password' placeholder=' Password' value={password} onChange={(event)=> {setPassword(event.target.value)}} />
        </label>
        <button type='submit' className='submit-button'>Submit</button>
      </form>
      {signedUp && <p>Thanks for signing up!</p>}
    </>
  )
}