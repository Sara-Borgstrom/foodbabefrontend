import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {About} from './Components/About';
import {Blog} from './Components/Blog';
import {Home} from './Components/Home';
import {Testimonials} from './Components/Testimonials';
import {Contact }from './Components/Contact'
import { Admin } from './Components/Admin';

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
        <Route path="/testimonials">
          <Testimonials />
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