import React, { Component } from 'react'
import Ninja from './Ninja';

class AppF extends Component {
  state = {
    ninjas: [
      { name: 'mosi', age: 34, id: 1 },
      { name: 'mori', age: 32, id: 2 },
      { name: 'rohy', age: 32, id: 3 },
      { name: 'edii', age: 31, id: 4 }
    ]
  }
  render() {
    return (
      <div>
        <Ninja ninjas={this.state.ninjas}/>
      </div>
    )
  }
}
export default AppF;