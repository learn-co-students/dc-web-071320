import React from 'react';
import Pizza from '../components/Pizza'

const PizzaList = ( props ) => {

  const pizzas = props.pizzas.map( pizza =>
    <Pizza
      key = { pizza.id }
      pizza = { pizza }
      clickPizza = { props.clickPizza }
    />
  )

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          //render Pizza here
          pizzas
        }
      </tbody>
    </table>
  );

}

export default PizzaList;
