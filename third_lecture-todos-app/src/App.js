import React from 'react';
import './App.css';
import Header from './Components/Header'
import Counter from './Components/Counter'
import Greeting from './Components/Greeting';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      isLoggedin: false,
      name: 'Asabeneh Yatayeh',
      skills: ['HTML'],
      todo: '',
      feedback: ''
    }
  }
  handleAdd = () => {
    console.log('clicked');
    this.setState({
      count: this.state.count + 1
    })
  }
  handleMinus = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  handleLogin = () => {
    this.setState({
      isLoggedin: !this.state.isLoggedin
    })
  }
  handleChange = (e) => {
    this.setState({
      todo: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (!this.state.todo) {
      this.setState({
        feedback: 'required'
      })

    } else if (this.state.skills.indexOf(this.state.todo) === -1) {
      this.setState((prvState) => ({
        skills: [...prvState.skills, this.state.todo]
      }));
    } else {
      this.setState({
        feedback: 'exist'
      });
    }
    this.setState({
      todo: ''
    })
  }
  handleDelete = (index) => {
    const skills = [...this.state.skills]
    skills.splice(index, 1)
    this.setState({
      skills
    })
  }
  render() {
    

    return (
      <div className="App">
        <Header
          name={this.state.name}
        />
        <p>please {this.state.isLoggedin ? 'LOG IN' : 'LOG OUT'}</p>
        <button
          onClick={this.handleLogin}>
          {this.state.isLoggedin ? 'LOG OUT' : 'LOG IN'}
        </button>
        {this.state.isLoggedin && <Greeting />}
        <Counter
          handleAdd={this.handleAdd}
          handleMinus={this.handleMinus}
          count={this.state.count}
        />
        <br />
        <hr />
        <br />
        <hr />
        <br />
        <AddTodo
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          feedback={this.state.feedback}
          todo={this.state.todo}
          skills={this.state.skills}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }

}

export default App;
