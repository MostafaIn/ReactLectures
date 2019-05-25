import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Add,Minus,ChangeName} from './index';
import Header from './components/Header';
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
  // state = {   ***  no need of them when using the redux for the App.  ***
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
      <Header />
      <h5>{this.props.title}</h5>
        <h1>WELCOME TO REACT REDUX</h1>
        {higherOrderComp(Home)}
        <h2>Count:{this.props.count}</h2>
        
        {/* <h3>count:{this.state.count} </h3> */}
        {/* <button onClick={this.handleAdd}>ADD</button> */}
        <i className="fas fa-minus-circle" onClick={this.props.Minus}></i>
        <i className="fas fa-plus-circle" onClick={this.props.Add}></i>
        <hr/>
        <h2>Name:{this.props.name}</h2>
        <button className="changeIt" onClick={this.props.ChangeName}>Change it</button>
        <br />
        <br />
      <hr />
      <hr />
      
      </div>
    )
  }
};
const mapStateToProps = (state,ownProps) => {
  return {
    count:state.one.count,
    name:state.one.name,
    todos:state.todos,
    title:`TITLE: ${ownProps.title}.`
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
