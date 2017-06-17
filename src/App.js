import React, { Component } from 'react'
import Toy from './Components/Toy'
import Utensil from './Components/Utensil'
import Box from './Components/Box'

class App extends Component {
  render() {
    const toys = [
      require('./images/Kite.png'), require('./images/Robot.png'),
      require('./images/Soccer.png'), require('./images/Trex.png'),
      ].map((img) => {
      return <Toy src={img}/>
    })
    const utensils = [
      require('./images/Fish.png'), require('./images/Spoon.png'),
      require('./images/Knife.png'),
      ].map((img) => {
      return <Utensil src={img} />
    })
    return (
      <div className="App">
        {toys}
        {utensils}
        <Box />
      </div>
    );
  }
}

export default App;
