import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Prompt,Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Topics from './components/Topics';

const User = ({ match }) => {
  return (
    <h1>Welcome User {match.params.username}</h1>
  )
};

class App extends Component {
  state = {
    isLoggedIn:false
  };
  handleLogIn = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  };
  render() {
    const { isLoggedIn } = this.state;
    const status = isLoggedIn ? 'Log In' : 'Log Out';
    return (
      <Router>
        <div className="App">
          <Header />
          <NavBar />
          <button onClick={this.handleLogIn}>{status}</button>
          <Prompt 
            when={!isLoggedIn}
            message={location =>{
              if(location.pathname.startsWith('/topics')){
                return 'Are you sure to leave this page?';
              }
            }}
          />
          <Switch>
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Topics" component={props =>{
              return isLoggedIn ? <Topics {...props} /> : <Redirect to="/" />;
            }} />
            <Route path="/user/:username" exact strict component={User} />
            <Route path="/" component={Home} exact />
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;
