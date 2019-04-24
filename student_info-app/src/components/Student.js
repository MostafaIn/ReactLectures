import React from 'react';

function Student(props) {
    return (
        <div className="studentInfo">
            <img src={props.picture}/>
            <h2>{props.name}</h2>
            <h4> {props.title}</h4>
            <h6>{props.skills.join(' , ')}</h6>
            <p></p>
        </div>
    )
}

export default Student;