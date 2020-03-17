import React from 'react'
import {BlogPost} from './BlogPost'
import { Header } from './Header'
import { Footer } from './Footer'
//Preview and category page
// *The brunch guide. *The afternoon tea guide. *The sunday rost guide. *The dinner guide. *The going out guide.

export const Blog = ({title, description, link, type, _id}) => {

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
    
      <Footer />
    </>
  )
}