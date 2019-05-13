import React from 'react';


import './App.css';
import cars from './productList';
import Car from './Car';
import Conditional from './Conditional';


// function App() {
//   const carComponent = cars.map(car => <Car key={car.id} company={car.company} model={car.model} />)
//   return (
//     <div className="App">
//       {carComponent}
//     </div>
//   );
// }
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      isfriendly: true,
      gender: '',
      favColor:'blue'
    }
    this.TheName = this.TheName.bind(this)
  }
  TheName(e) {
    const { name, value, type, checked } = e.target
    type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }
  render() {
    return (
      <div className="App">
        <form  >
          <input type="text" name="firstName" value={this.state.firstName} placeholder="your first name here!" onChange={this.TheName} />
          <input type="text" name="lastName" value={this.state.lastName} placeholder="your last name here!" onChange={this.TheName} />
          <input type="text" name="age" value={this.state.age} placeholder="how old are you?" onChange={this.TheName} />
          <textarea value="some default text here .!" />
          <br />
          <label>
            <input type="checkbox" name='isfriendly' checked={this.state.isfriendly} onChange={this.TheName} />
            is friendly?
          </label>
          <br />
          <label>
            <input 
            type="radio" 
            name="gender" 
            value='male' 
            checked={this.state.gender === 'male'} 
            onChange={this.TheName} 
            />MALE
          </label>
          <label>
            <input type="radio" name="gender" value='female' checked={this.state.gender === 'female'} onChange={this.TheName} />
            FEMALE
          </label>
          {/* formik */}
          <br/>
          <br/>

        <label>Favorite Color: </label>
        <select value={this.state.favColor} onChange={this.TheName} name='favColor'>
          <option value='blue'>blue</option>
            <option value='green'>green</option>
            <option value='yellow'>yellow</option>
            <option value='orange'>orange</option>
            <option value='red'>red</option>
        </select>

          <h1>your name is {this.state.firstName} {this.state.lastName} and I am {this.state.age} yearsold.</h1>
          <h2>and you are {this.state.gender}</h2>
          <h2>your favorite color is {this.state.favColor}</h2>

          <button>SUBMIT</button>
        </form>
      </div>
    )
  }

}

export default App;
