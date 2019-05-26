import React from 'react'
import Todo from './Todo';

const TodoList = props => {
    const todos = props.todos.map((todo, i) => {
        return <Todo todo={todo} index={i} key={i} />
    })
    return (
        <ul>
            {todos}
        </ul>

    )
}

export default TodoList
