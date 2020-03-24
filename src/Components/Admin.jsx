import React, { useState, useEffect, useRef } from 'react'
import './Styling/admin.css'

const URL = 'https://foodbabe.herokuapp.com/foods'

export const Admin = ({onClick}) => {
  const fileInput = useRef()
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [description, setDescripion] = useState('')
  const [type, setType] = useState('')
  const accessToken = window.localStorage.getItem('accessToken')

  const handleFormSubmit = (e)=> {
    e.preventDefault();

    const formData = new FormData()
    formData.append('image', fileInput.current.files[0])
    formData.append('title', title)
    formData.append('link', link)
    formData.append('description', description)
    formData.append('type', type)

    fetch(URL, { method: 'POST', body: formData })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setTitle('')
        setLink('')
        setDescripion('')
        setType('')
        fileInput.current.value=null
      })
  }
  useEffect(() => {
    const fetchUserData = () => {
      const URL= `https://foodbabe.herokuapp.com/users/current`
      return fetch(URL, {
        method: 'GET',
        headers: {'Authorization': accessToken}
      })
        .then(res => res.json())
        .catch(err => {
          console.log('error', err)
        })
    }
    fetchUserData()
  })
  return (
    <>
      <form onSubmit={handleFormSubmit} className="admin-form">
        <label className="form-input">
          <p> Title</p>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label className="form-input">
          <p>Link</p>
          <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
        </label>
        <label className="form-input">
          <p>Description</p>
          <textarea rows="3" type="text" value={description} onChange={(e) => setDescripion(e.target.value)} />
        </label>
        <label className="form-input">
          <p>Type</p>
          <select type="text" value={type} onChange={(e) => setType(e.target.value)} >
          <option value="Select type">Select type</option>
            <option value="Brunch">Brunch</option>
            <option value="Afternoon Tea">Afternoon Tea</option>
            <option value="Dinner">Dinner</option>
            <option value="Drinks">Drinks</option>
          </select>
        </label>
        <label className="form-input">
          <p>Food image</p>
          <input type="file" ref={fileInput} />
        </label>
        <button type="submit" className="submit-button">
        Submit
        </button>
      </form>
      <button type="button" className="button-signout" onClick={onClick}>Sign out </button>
    </>
  )
}