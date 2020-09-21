import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const baseUrl = 'http://localhost:3000/'
const pizzasUrl = baseUrl + 'pizzas/'

class App extends Component {

  state = {
    pizzas: [],
    editPizza: {}
  }

  componentDidMount () {
    fetch( pizzasUrl )
    .then( res => res.json() )
    .then( pizzas => this.setState({ pizzas }) )
  }

  updatePizza = ( e ) => {
    let name = e.target.name
    let value = e.target.value

    if ( value === 'false' )
      value = false
    if ( value === 'true' )
      value = true

    this.setState({
      editPizza: {...this.state.editPizza,
        [name]: value }
      })
  }

  patchPizza = ( ) => {

    let pizza = this.state.editPizza

    let method = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application.json'
      },
      body: JSON.stringify( pizza )
    }

    fetch( pizzasUrl + pizza.id, method )
    .then( res => res.json() )
    .then( updatedPizza => { 
      let pizzas = this.state.pizzas.map( pizza => { 
        if ( pizza.id === updatedPizza.id )
          return updatedPizza
        else return pizza
      })

      this.setState({ pizzas })
    })
  }

  clickPizza = ( editPizza ) => {
    this.setState({ editPizza })
  }

  render() {
    return (
      <Fragment>
      
        <Header/>
        
        <PizzaForm
          updatePizza = { this.updatePizza }
          editPizza = { this.state.editPizza }
          patchPizza = { this.patchPizza }
        />

        <PizzaList 
          pizzas = { this.state.pizzas }
          clickPizza = { this.clickPizza }
        />
      
      </Fragment>
    );
  }
}

export default App;
