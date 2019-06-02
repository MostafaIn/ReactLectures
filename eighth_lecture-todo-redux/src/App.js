import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addTodo, deleteTod, editTodo } from './store/actions/todo-actions';
import Header from './components/Header';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';

class App extends Component {
  state = {
    task: '',
    editTask: ''
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.task);
  };
  handleEdit = e => {
    e.preventDefault();
    this.props.editTodo(this.props.index, this.state.editTask)
  };
  render() {
    const { todos, todo, index } = this.props;
    return (
      <div className="App">
        {this.props.title}
        <Header />
        <h5 style={{ textAlign: 'center' }}>Number of todos:{todos.length}</h5>
        {this.props.editing ? (
          <EditTodo
            handleChange={this.handleChange}
            handleEdit={this.handleEdit}
            editTask={this.props.editTask}
            editTodo={() => this.props.editTodo(index, todo)}
          />
        ) : null}
        <AddTodo
          task={this.state.task}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
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
