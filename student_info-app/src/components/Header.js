import React from 'react';

function Header(props) {
    return (<header className='header'>
        <h1>Let's Get Started with ReactJS</h1>
        <h4>Teacher: {props.firstName} {props.lastName}</h4>
        <p>Year: {props.year}</p>
    </header>);
}
export default Header;