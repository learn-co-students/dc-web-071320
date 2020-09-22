import React, { Component } from 'react';
import SushiWallet from './components/SushiWallet';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    index: 0,
    eatenSushi: [],
    money: 100,
    withdrawal: 0
  }

  componentDidMount () {
    fetch( API )
    .then( res => res.json() )
    .then( sushi => this.setState({ sushi }) )
  }

  nextFourSushi = () => {
    let index = this.state.index
    if ( index >= this.state.sushi.length - 4 )
      index = -4
    this.setState({ index: index + 4 })
  }

  previousFourSushi = () => {
    let index = this.state.index
    if ( index <= 0 )
      index = 100
    this.setState({ index: index - 4 })
  }

  eatSushi = ( sushi ) => {
    let isEaten = !this.state.eatenSushi.includes( sushi.id )
    if ( isEaten && this.state.money >= sushi.price )
      this.setState({
        eatenSushi: [...this.state.eatenSushi, sushi.id],
        money: this.state.money - sushi.price
      })
    else if ( isEaten && this.state.money < sushi.price )
      alert(`You don't have enough funds!`)
  }

  addMoney = () => {
    this.setState({
      money: this.state.money + this.state.withdrawal,
      withdrawal: 0
    })
  }

  changeWithdrawalAmount = ( e ) => this.setState({ [e.target.name]: parseInt(e.target.value) }) 

  render() {
    const fourSushi = this.state.sushi.slice( this.state.index, this.state.index + 4 )
    return (
      <div className="app">

        <SushiWallet
          addMoney = { this.addMoney }
          changeWithdrawalAmount = { this.changeWithdrawalAmount }
          withdrawal = { this.state.withdrawal }
        />

        <SushiContainer
          sushi = { fourSushi }
          nextFourSushi = { this.nextFourSushi }
          eatSushi = { this.eatSushi }
          eatenSushi = { this.state.eatenSushi }
          previousFourSushi = { this.previousFourSushi }
        />
        
        <Table
          eatenSushi = { this.state.eatenSushi }
          money = { this.state.money }
        />
      </div>
    );
  }
}

export default App;