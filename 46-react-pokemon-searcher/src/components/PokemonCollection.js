import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = ( props ) => {

  const pokemon = props.pokemon.map( pokemon =>
    <PokemonCard
      key = { pokemon.id }
      pokemon = { pokemon }
      clicked = { props.clicked }
      flipPokemonCard = { props.flipPokemonCard }
    />
  )

  return (
    <Card.Group itemsPerRow={6}>
      { pokemon }
    </Card.Group>
  )
}

export default PokemonCollection
