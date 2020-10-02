import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { createStore } from 'redux'

let initialState = {count: 0, text: "Friday!!"}

let reducer = (state = initialState, action) => {

  console.log("current State:", state)
  console.log("action:", action)
  console.log("========================")

  // switch statement
  switch(action.type){
    case "inc":
      return {
        ...state,
        count: state.count + action.payload 
      }
    case "dec":
      return{
        ...state,
        count: state.count - action.payload
      }
    default:
      return state
  }

  // return state
}

const store = createStore(reducer) //reducer as an arg

store.subscribe(() => {
  console.log("----------------------")
  console.log("New State:", store.getState())
  console.log("----------------------")
})

console.log(store)
console.log("GET State:", store.getState())

class App extends Component {

  // state = { count: 0 };

  // increment = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // };

  // decrement = () => {
  //   this.setState({
  //     count: this.state.count - 1
  //   })
  // };

  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
        {/* <Counter 
        count={this.state.count}
        increment={this.increment}
        decrement={this.decrement} /> */}
      </div>
    );
  }
}

class Header extends Component {

  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
}

class Counter extends Component {

  // 1. Subscribe 
  // 2. rerender component
  componentDidMount(){
    store.subscribe(() => {
      this.setState({}) // rerender the component
    })
  }

  increment = (amount) => {
    store.dispatch({type: "inc", payload: amount}) // action as an arg
  }

  decrement = (amount) => {
    store.dispatch({type: "dec", payload: amount})
  }

  render() {
    return (
      <div className="Counter">
        <h1>
          Count: {store.getState().count}
        </h1>
        {/* <h1>{this.props.count}</h1> */}
        <button onClick={() => this.decrement(1)}> - </button>
        <button onClick={() => this.increment(1)}> + </button>
        <button onClick={() => this.decrement(3)}> -3 </button>
        <button onClick={() => this.increment(5)}> +5 </button>
      </div>
    );
  }

}



ReactDOM.render(
    <App /> 
 , document.getElementById("root"));