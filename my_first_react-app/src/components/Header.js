import React from 'react';

const Header = ({ content, firstName, lastName, year }) =>
    (
        <header>
            <h1>{content}</h1>
            <h4>Teacher:{`${firstName} ${lastName}`}  </h4>
            <p>year: {year}</p>
            <hr />
        </header>
        
    )

export default Header;