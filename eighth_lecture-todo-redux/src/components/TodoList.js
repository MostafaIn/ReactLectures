import React from 'react'
import Todo from './Todo';
// import todosReducer from '../store/reducers/todos-reducer';

const TodoList = props => {
    const todos = props.todos.map((todo, i) => {
        return <Todo todo={todo} index={i} key={'todo' + 1} />
    });
    return <ul>{todos}</ul>;

    
}

export default TodoList
