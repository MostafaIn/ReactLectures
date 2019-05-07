import React from 'react'

const Todo = ({ index, todo, handleDelete }) => {
    return (
        <li>
            {todo}
            <button className="delBtn" onClick={() => handleDelete(index)}><i class="fas fa-trash-alt"></i></button>
        </li>
    )
}
export default Todo;