import React,{ useState, useEffect }  from 'react'
import './blogpost.css'

// Comment - on post url blog/id, text 
// CMS?? or just preadded posts
// Might hardcode this part
const url = 'http://localhost:8080/foods'

export const BlogPost = () => {
  const [post, setPost] = useState([]);
  useEffect (() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setPost(json));
  }, [post]);
  return (

    <article className='blog-container'>
      {post.map(post => (
        <>
          <div className='blog-box'>
            <h3><span>{post.type}</span></h3>
            <h2><span>{post.title}</span></h2>
            <p><span>{post.description}</span></p>
            <button onClick={post.link} className='link-button'>Find more</button>
          </div>
        </>
      ))}
    </article>
   
  )
}