import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    console.log('props', this.props);
    // const todos = this.props.todos.map(todo => (
    //   <li>
    //     {todo} <button>Delete</button>
    //   </li>
    // ));
    return (
      <div className="App">
        {this.props.title}
        <Header />
        <h5 style={{textAlign:'center'}}>Number of todos:{this.props.todos.length}</h5>
        <AddTodo />
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todos
  };
};
const mapActionsToProps = dispatch => {
  return {
    
  };
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
