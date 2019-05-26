import { combineReducers } from 'redux';
import todosReducer from './todos-reducer';

const allReducers = combineReducers({
    todos: todosReducer
});

export default allReducers;
