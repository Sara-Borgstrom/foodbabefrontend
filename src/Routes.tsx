import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About';
import Blog from './Components/Blog';
import Home from './Components/Home';
import Testimonials from './Components/Testimonials';

interface Props {
  
}

const Routes: React.FC<Props> = () => {
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
        <Route path="/testimonials">
          <Testimonials />
        </Route> 
        <Route path={["/home", "/"]}>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
