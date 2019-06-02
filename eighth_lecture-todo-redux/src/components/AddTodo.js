import React, { Component } from 'react';
import { addTodo } from '../store/actions/todo-actions';
import { connect } from 'react-redux';

class AddTodo extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="task"
                        value={this.props.task}
                        onChange={this.hanldeChange}
                        placeholder="TASK ..."
                    />
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}

// const mapActionsToProps = dispatch => {
//     return {
//         addTodo: todo => dispatch(addTodo(todo))
//     };
// };

export default connect(
    null,
    {addTodo}
)(AddTodo);
