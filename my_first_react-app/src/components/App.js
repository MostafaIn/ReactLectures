// import React, { Component } from 'react';
// import Header from './Header';
// import Main from './Main';
// import Footer from './Footer';

// const Greeting = (props) => {
//     return <div>
//         <h4> Welcome, {props.name}</h4>
//     </div>
// }

// class App extends Component {
//     state = {
//         count: 0,
//         name: 'Asabeneh',
//         color: 'gray',
//         isLoggedIn: false
//     }


//     addOneBtn() {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     minusOne() {
//         this.setState({
//             count: this.state.count - 1
//         })
//     }

//     changeNameBtn() {
//         let name = this.state.name === 'Asabeneh' ? 'David' : 'Asabeneh';
//         this.setState({ name })
//     }

//     changeColorBtn() {
//         let color = this.state.color === 'gray' ? 'blue' : 'gray';
//         this.setState({ color })
//     }

//     handleLogin() {
//         this.setState({
//             isLoggedIn: !this.state.isLoggedIn
//         })
//     }

//     render() {
//         const isloggedIn = this.state.isLoggedIn;
//         const status = this.state.isLoggedIn ? 'LOG OUT' : 'LOG IN';
//         const msg = isLoggedIn ? <Greeting name='Asabeneh' /> : <p>Please Log In</p>
//         return <div style={{ background: this.state.color }}>
//             <p>{msg}</p>
//             <button onClick={this.handleLogin}>{status}</button>
//             <h1>Count:{this.state.count}</h1>
//             <h2>Name: {this.state.name}</h2>
//             <button onClick={this.addOneBtn}>Add one</button>{" "}
//             <button onClick={this.minusOne}>Minus one</button>
//             <button onClick={this.changeNameBtn}>change name</button>
//             <button onClick={this.changeColorBtn}> change color</button>
//             <hr />
//             <hr />
//             <Header
//                 const content="Let's start with React"
//                 let firstName="Asabeneh"
//                 let lastName="Yatayeh"
//                 const year={new Date().getFullYear()}

//             />
//             <Main
//                 const skills={['HTML', 'CSS', 'JAVASCRIPT', 'REACT']}
//             />
//             <Footer />
//         </div >
//     }
// }
// // const App= () => {
// //     return (<div>
// //         <Header
// //             const content="Let's start with React"
// //             const firstName="Asabeneh"
// //             const lastName="Yatayeh"
// //             const year={new Date().getFullYear()}

// //         />
// //         <Main
// //             const skills={['HTML', 'CSS', 'JAVASCRIPT', 'REACT']}
// //         />
// //         <Footer />
// //     </div>)
// // }
// export default App;




/// Asabeneh's code here! 23 April 2019 
import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from './Footer';
console.log(React)

const Greeting = (props) => {
    return <div>
        <h4>Welcome, {props.name}</h4>
    </div>
}

class App extends Component {
    state = {
        count: 0,
        name: 'Asabeneh',
        color: 'gray',
        isLoggedIn: false
    }
    addOne = () => {
        this.setState({
            count: this.state.count + 1
        })

    }
    minusOne = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    changeName = () => {
        let name = this.state.name === 'Asabeneh' ? 'David' : 'Asabeneh';

        this.setState({ name })
    }
    changeBgColor = () => {
        let color = this.state.color === 'gray' ? 'lightblue' : 'gray';
        this.setState({
            color
        })
    }
    handleLogin = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        const status = this.state.isLoggedIn ? 'LOG OUT' : 'LOG IN';
        const message = isLoggedIn ? <Greeting name="Asabeneh" /> : <p>Please login</p>

        return <div style={{ background: this.state.color }}>
            {message}

            <button onClick={this.handleLogin}>{status}</button>
            <h1>Count:{this.state.count}</h1>
            <h2>Name:{this.state.name}</h2>
            <button onClick={this.addOne}>Add One</button> {" "}
            <button onClick={this.minusOne}>Minus One</button>
            <button onClick={this.changeBgColor}>Change Background Color</button>
            <button onClick={this.changeName}>Change Name</button>
            <Header
                title="Lets Get Started With React"
                firstName="Asabeneh"
                lastName="Yetayeh"
                year={new Date().getFullYear()}
            />
            <Main skills={["HTML", "CSS", "JavaScript"]} />
            <Footer year={new Date().getFullYear()} />
        </div>

    }
}



export default App;