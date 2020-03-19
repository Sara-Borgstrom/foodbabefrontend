import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {About} from './Components/About';
import {Blog} from './Components/Blog';
import {Home} from './Components/Home';
import { Admin } from './Components/Admin';
import { Contact } from './Components/Contact';
import { BlogPost } from './Components/BlogPost';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>      
        <Route path="/blogpost">
          <BlogPost />
        </Route>   
        <Route path="/contact">
          <Contact />
        </Route>  
        <Route path="/admin">
          <Admin />
        </Route> 
        <Route path={["/home", "/"]}>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}