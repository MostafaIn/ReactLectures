import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const Home = (props) => {
  return (
    <div>
      <h1>here is the homepage!</h1>
    </div>
  )
};
const About = (props) => {
  return (
    <div>
      <h1>what do you know about me?</h1>
    </div>
  )
};
const Contact = (props) => {
  return (
    <div>
      <h1>please contact with me :)</h1>
    </div>
  )
};
const Topics = (porps)=>{
  const path= props.match.path;
  return(
    <div>
      <h3>Topics</h3>
      <ul>
        <Link to ={`${path}html`}>HTML</Link>
      </ul>
    </div>
  )
}
export default class Res extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
          
          <Switch>

            <Route path="/about" render={About} />
            <Route path="/contact" render={Contact} />
            <Route path="/" render={Home} />
          </Switch>
          <br />
          <hr />
        </div>
      </Router>
    );
  }
}
