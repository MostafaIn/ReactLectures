import React from 'react'

function handlerClick() {
    console.log('this is me');

}
const Handler = () => {
    return (
        <div>
            <img onMouseOver={() => console.log("hoverd!!!")} src="https://www.fillmurray.com/200/100" />
            <br/>
            <br/>
            <button onClick={handlerClick}>click HERE!</button>
        </div>
    )
}

export default Handler
