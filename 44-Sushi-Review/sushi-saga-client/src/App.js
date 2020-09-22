import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

function changeArray(array, id){
  return array.map(element => {
    if(element.id === id){
      return {...element, eaten: true }
    }
    return element
  })
}

class App extends Component {

  constructor(){
    super()
    this.state = {
      sushis: [],
      displaySushis: [],
      startIndex: 0,
      emptyPlate: [],
      wallet: 100
    }
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => {

      let newSushisArray = sushis.map(sushi => {return {...sushi, eaten: false} })

      this.setState({
        // sushis,
        sushis: newSushisArray,
        displaySushis: newSushisArray.slice(0,4),
        startIndex: 4
      })
    })
  }

  displayMoreSushis = () => {
    this.setState({
      displaySushis: this.state.sushis.slice(this.state.startIndex, this.state.startIndex+4),
      startIndex: this.state.startIndex + 4 
    })
  }

  eatSushi = (sushi) => {
    // debugger
    // this.setState({
    //   sushis: this.state.sushis.map(sushi => {
    //     if(sushi.id === sushi.id){
    //       return {...sushi, eaten: true}
    //       // sushi.eaten = true
    //     }
    //     return sushi
    //   }),
    //   displaySushis: this.state.displaySushis.map(sushi => {
    //     if(sushi.id === sushi.id){
    //       return {...sushi, eaten: true}
    //     }
    //     return sushi
    //   })
    // })
    
    if(sushi.price <= this.state.wallet){
      this.setState({
        sushis: changeArray(this.state.sushis, sushi.id), //sushiId
        displaySushis: changeArray(this.state.displaySushis, sushi.id),
        emptyPlate: [...this.state.emptyPlate, sushi.id],
        wallet: this.state.wallet - sushi.price
      })
    }

  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
        displaySushis={this.state.displaySushis}
        displayMoreSushis={this.displayMoreSushis}
        eatSushi={this.eatSushi}  />
        <Table 
        emptyPlate={this.state.emptyPlate}
        wallet={this.state.wallet} />
      </div>
    );
  }
}

export default App;