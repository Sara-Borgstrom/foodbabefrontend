import React, { useState, useRef } from 'react'
import './Styling/admin.css'

const API_URL = 'http://localhost:8080/foods'

export const Admin = () => {
  const fileInput = useRef()
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [description, setDescripion] = useState('')
  const [type, setType] = useState('')

  const handleFormSubmit = (e)=> {
    e.preventDefault();
    const formData = new FormData()
    formData.append('image', fileInput.current.files[0])
    formData.append('title', title)
    formData.append('link', link)
    formData.append('description', description)
    formData.append('type', type)

    fetch(API_URL, { method: 'POST', body: formData })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      })
  }
  return (
    <form onSubmit={handleFormSubmit} className='admin-form'>
      <label>
        Food image
        <input type="file" ref={fileInput} />
      </label>
      <label>
        Title
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Link
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
      </label>
      <label>
       Description
        <input type="text" value={description} onChange={(e) => setDescripion(e.target.value)} />
      </label>
      <label>
        Type
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
      </label>
      <button type="submit">
        Submit
      </button>
    </form>
  )
}