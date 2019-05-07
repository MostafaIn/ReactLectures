import React from 'react';
import Greeting from './Greeting';

const Header = (props) => {
    return (
        <header>
            <h1>React Lecture (03)</h1>
            <h2>subjects :</h2>
            <span>count buttons, log in/out , very simple Todo app</span>
            <h4> Teacher: {props.name}</h4>

            {/* <Greeting /> */}
        </header>
    )
}
export default Header;