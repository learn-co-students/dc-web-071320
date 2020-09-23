import React from 'react'
import { Card } from 'semantic-ui-react'

const PokemonCard = ( props ) => {

  const { name, id, hp } = props.pokemon
  const { front, back } = props.pokemon.sprites

  return (
    <Card>
      <div>
        <div className="image" onClick={ () => props.flipPokemonCard( props.pokemon ) }>
          <img alt="oh no!" src={ props.clicked.includes( id ) ? back : front } />
        </div>
        <div className="content">
          <div className="header">{ name }</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            { hp }
          </span>
        </div>
      </div>
    </Card>
  )
}

export default PokemonCard
