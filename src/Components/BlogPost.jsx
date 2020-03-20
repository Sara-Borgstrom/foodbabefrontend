import React,{ useState, useEffect }  from 'react'
import './Styling/blogpost.css'

const url = 'http://localhost:8080/foods'

export const BlogPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {

    fetch(url)
      .then(res => res.json())
      .then(json => setPosts(json));
  }, []); 

  const brunchPosts = posts.filter(post => post.type.toLowerCase() === 'brunch')
  const afternoonPosts = posts.filter(post => post.type.toLowerCase() === 'afternoon')
  const dinnerPosts = posts.filter(post => post.type.toLowerCase() === 'dinner')
  const drinksPosts = posts.filter(post => post.type.toLowerCase() === 'drinks')

  return (
    <>
      <h1 className="">BRUNCH</h1>
      <div className="blog-container">
        {brunchPosts.map(brunchPost => (
          <div className="blog-box" key={`${brunchPost._id}`}>
            <img src={brunchPost.imageUrl} alt="" className="blog-image" />
            <div className="blog-text-box">
              <h3><span>{brunchPost.type}</span></h3>
              <h2><span>{brunchPost.title}</span></h2>
              <p><span>{brunchPost.description}</span></p>
            </div>
            <div className="link-box">
              <a href={brunchPost.link} className="site-link">Find more</a>
            </div>
          </div>))}</div>
      <h1 className="">AFTERNOON TEA</h1>
      <div className="blog-container">
        {afternoonPosts.map(afternoonPost => (
          <div className="blog-box" key={`${afternoonPost._id}`}>
            <img src={afternoonPost.imageUrl} alt="" className="blog-image" />
            <div className="blog-text-box">
              <h3><span>{afternoonPost.type}</span></h3>
              <h2><span>{afternoonPost.title}</span></h2>
              <p><span>{afternoonPost.description}</span></p>
            </div>
            <div className="link-box">
              <a href={afternoonPost.link} className="site-link">Find more</a>
            </div>
          </div>))}</div>
      <h1 className="">DRINKS</h1>
      <div className="blog-container">
        {drinksPosts.map(drinksPost => (
          <div className="blog-box" key={`${drinksPost._id}`}>
            <img src={drinksPost.imageUrl} alt="" className="blog-image" />
            <div className="blog-text-box">
              <h3><span>{drinksPost.type}</span></h3>
              <h2><span>{drinksPost.title}</span></h2>
              <p><span>{drinksPost.description}</span></p>
            </div>
            <div className="link-box">
              <a href={drinksPost.link} className="site-link">Find more</a>
            </div>
          </div>))}</div>
      <h1 className="">DINNER</h1>
      <div className="blog-container">
        {dinnerPosts.map(dinnerPost => (
          <div className="blog-box" key={`${dinnerPost._id}`}>
            <img src={dinnerPost.imageUrl} alt="" className="blog-image" />
            <div className="blog-text-box">
              <h3><span>{dinnerPost.type}</span></h3>
              <h2><span>{dinnerPost.title}</span></h2>
              <p><span>{dinnerPost.description}</span></p>
            </div>
            <div className="link-box">
              <a href={dinnerPost.link} className="site-link">Find more</a>
            </div>
          </div>))}</div>
    </>
  )
}