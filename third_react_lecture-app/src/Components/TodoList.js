import React from 'react'
import Todo from './Todo'

const TodoList=(props)=>{
    const TodoList= props.skills.map((todo,i)=>{
        return <Todo 
            todo={todo}
            handleDelete={props.handleDelete}
            index= {i}
        />

    })
    return(
        <div>
            <ul>{TodoList}</ul>
        </div>
    )
}
export default TodoList;