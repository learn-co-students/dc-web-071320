import React from 'react'
import { Form } from 'semantic-ui-react'

const PokemonForm = ( props ) => {

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={ props.addPokemon } >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input fluid label="Front Image URL" placeholder="url" name="front" />
          <Form.Input fluid label="Back Image URL" placeholder="url" name="back" />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default PokemonForm
