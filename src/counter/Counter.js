import React, { Component } from 'react';

class Counter extends Component {
  state = { counterValue: 0 }

  // inc(){
  inc = () => {
    this.setState({ counterValue: this.state.counterValue + 1 })
  }

  dec = () => {
    const { counterValue } = this.state 
    this.setState({ counterValue: counterValue - 1 })
  }

  render() {
    const { counterName } = this.props
    // Object Destructuring 
    // const counterName = this.props.counterName
    const { counterValue } = this.state 
    return(
      <div>
        <h1 style={{ backgroundColor: counterName, color: 'white', fontSize: '20px' }}>{ this.props.counterName } Counter</h1>
        <p>
          { counterValue }
        </p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }
}

export default Counter;