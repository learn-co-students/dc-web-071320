import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const baseUrl = 'http://localhost:3000/'
const pokemonUrl = baseUrl + 'pokemon/'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    clicked: [],
    search: '',
  }
  
  componentDidMount () {
    fetch( pokemonUrl )
    .then( res => res.json() )
    .then( pokemon => this.setState({ pokemon }) )
  }

  flipPokemonCard = ( pokemon ) => {
    let clicked = [...this.state.clicked]
    if ( !clicked.includes( pokemon.id ) )
      this.setState({
        clicked: [...clicked, pokemon.id]
      })
    else if ( clicked.includes( pokemon.id ) )
      this.setState({
        clicked: clicked.filter( id => id !== pokemon.id )
      })
  }

  addPokemon = ( e ) => {
    
    let pokemon = {
      name: e.target.name.value,
      hp: e.target.hp.value,
      sprites: {
        front: e.target.front.value,
        back: e.target.back.value
      }
    }

    e.target.reset()

    let postRequest = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify( pokemon )
    }
    
    fetch( pokemonUrl, postRequest )
    .then( res => res.json() )
    .then( newPokemon => this.setState({
        pokemon: [...this.state.pokemon, newPokemon]
      })
    )
  }

  updateSearch = ( search ) => this.setState({ search })

  render() {
    const pokemon = this.state.pokemon.filter( pokemon =>
        pokemon.name.includes( this.state.search )
      )
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm
          addPokemon = { this.addPokemon }
        />
        <br />
        <Search
          updateSearch = { this.updateSearch }
        />
        <br />
        <PokemonCollection
          pokemon = { pokemon }
          clicked = { this.state.clicked }
          flipPokemonCard = { this.flipPokemonCard }
        />
      </Container>
    )
  }
}

export default PokemonPage
