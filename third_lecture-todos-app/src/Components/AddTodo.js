import React from 'react'
import TodoList from './TodoList';


const AddTodo = ({handleSubmit,handleDelete,handleChange,feedback,todo,skills}) => {
    return (
        
        <div className="addList">
            <h3>Add your skills here: </h3>
            <form onSubmit={handleSubmit}>
                <input type='text' name='todo' value={todo} onChange={handleChange} />
                <button className="addBtn">Add some</button>
                <h4>{todo}</h4>
                <h4>{feedback}</h4>
                <TodoList 
                    skills={skills}
                    handleDelete={handleDelete}
                />
            </form>
        </div>
    )
}
export default AddTodo;