import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

const initialState = {
    count: 0,
    name: 'Asabeneh'
}


const reducer1 = (state = initialState, { type, payload }) => {
    // if(action.type ==='ChangeState'){
    //     return action.payload
    // }else{
    //     return state;
    // } 
    switch (type) {
        case 'ADD':
            return { ...state, count: state.count + 1 };
        case 'MINUS':
            return { ...state, count: state.count - 1 };
        case 'Change_Name':
            return { ...state, name: payload.name };
        default:
            return state;
    }
};



const allReducers= combineReducers({
    one: reducer1
})

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState());

export const Add = () => {
    return {
        type: 'ADD',
        payload: 'New this.state.'
    }

}
export const Minus = () => {
    return {
        type: 'MINUS'
    }
}
export const ChangeName = (NewName) => {
    return {
        type: 'Change_Name',
        payload: {
            name: NewName
        }
    }
};


// store.dispatch(Add());
// store.dispatch(Add());
// store.dispatch(Add());
// console.log(store.getState());
// store.dispatch(Minus());
// console.log(store.getState());
// store.dispatch(ChangeName('mostafa'));
console.log(store.getState());


ReactDOM.render(
    <Provider store={store}>
        <App title="this is a title from App component" />
    </Provider>, document.getElementById('root'));
