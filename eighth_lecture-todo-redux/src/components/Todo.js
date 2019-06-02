import React from 'react';
import { deleteTodo, editTodo } from '../store/actions/todo-actions';
import { connect } from 'react-redux';

const Todo = ({ todo, index, deleteTodo, editTodo }) => {
    return (
        <li>
            <span className="todoItem">{todo}</span>
            <i className="fas fa-pencil-alt" onClick={() => editTodo(index)}></i>
            <i className="fas fa-trash-alt" onClick={() => deleteTodo(index)}></i>
        </li>
    );
};

// const mapActionsToProps = dispatch => {
//     return {
//         deleteTodo: index => dispatch(deleteTodo(index))
//     };
// };

export default connect(
    null,
    {deleteTodo,editTodo}
)(Todo);
