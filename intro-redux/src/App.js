import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Add,Minus,ChangeName} from './index';
import './App.css';


// const higherOrderFunc =(x)=>{
//   return (y)=> 2 * x * y + 10;
// }
// console.log(higherOrderFunc(2)(3));
const Home = props => <h1>Welcome Home</h1>;
const higherOrderComp = (Comp) => {
  return (
    <div style={{ background: '#eee' ,padding: 15}}>
      <Comp />
    </div>
  )
}

class App extends Component {
  // state = {
  //   count: 0
  // }
  // handleAdd = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }
  // handleMinus = () => {
  //   this.setState({
  //     count: this.state.count - 1
  //   })
  // }
  render() {
    return (
      <div className="App">
        <h1>WELCOME TO REACT REDUX</h1>
        {higherOrderComp(Home)}
        <h2>Count:{this.props.count}</h2>
        <h2>Name:{this.props.name}</h2>
        {/* <h3>count:{this.state.count} </h3> */}
        {/* <button onClick={this.handleAdd}>ADD</button> */}
        <i className="fas fa-minus-circle" onClick={this.props.Minus}></i>
        {" "}
        <i className="fas fa-plus-circle" onClick={this.props.Add}></i>
        <button onClick={this.props.ChangeName}>Change it</button>
      </div>
    )
  }
};
const mapStateToProps = state => {
  return {
    count:state.count,
    name:state.name
  }  
  };
  const mapActiveToProps = dispatch =>{
    return{
      Add: ()=> dispatch(Add()),
      Minus: ()=> dispatch(Minus()),
      ChangeName: ()=> dispatch(ChangeName(('MOSTAFA')))
    }
  };


export default connect(mapStateToProps,mapActiveToProps)(App);
