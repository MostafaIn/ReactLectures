import React from 'react'

// const Car = (props) => {
//     return (
//         <div className="car">
//             <input type='checkbox' />
//             <h1>Company: {props.company}</h1>
//             <h5>Model: {props.model}</h5>
//         </div>
//     )
// }
class Car extends React.Component{
    render(){
        return (
        <div className="car">
            <input type='checkbox' />
            <h2>Company:{this.props.company}</h2>
            <h3>Model: {this.props.model}</h3>
        </div>
    )
    }
}


export default Car;
        