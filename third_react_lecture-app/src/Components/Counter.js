import React from 'react';

const Counter = (props) => {
    return (
        <div className="counter">
            <button onClick={props.handleMinus}> -- </button>
            <h3>{props.count}</h3>
            <button onClick={props.handleAdd}> ++ </button>
        </div>
    )
}
export default Counter;