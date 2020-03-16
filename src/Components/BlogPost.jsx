import React,{ useState, useEffect }  from 'react'

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
    <main>
      <ul>
        {post.map(post => (
          <>
            <li key={post.title}>{post.title}</li>
            <li key={post.description}>{post.description}</li>
            <li key={post.imageUrl}>{post.imageUrl}</li>
          </>
        ))}
      </ul>
    </main>
  )
}