import React from 'react';
const Main= (props) =>{
    return (<main>
        <h2>To get start React you should know : </h2>
        {/* <p>{props.skills}</p> */}
        <ul>
            {props.skills.map((skill, i) => <li key={'skill' + i}>{skill}</li>)}
        </ul>
        <hr />
    </main>)
}

export default Main;