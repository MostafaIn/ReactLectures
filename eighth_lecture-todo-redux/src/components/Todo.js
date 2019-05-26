import React from 'react';
import { deleteTodo } from '../store/actions/todo-actions';
import { connect } from 'react-redux';

const Todo = ({ todo, index, deleteTodo }) => {
    return (
        <li>
            <span className="todoItem">{todo}</span> 
            <i className="fas fa-pencil-alt"></i>
            <i className="fas fa-trash-alt" onClick={() => deleteTodo(index)}></i>
        </li>
    );
};

const mapActionsToProps = dispatch => {
    return {
        deleteTodo: index => dispatch(deleteTodo(index))
    };
};

export default connect(
    null,
    mapActionsToProps
)(Todo);
