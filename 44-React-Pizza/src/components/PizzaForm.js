import React from "react"

const PizzaForm = ( props ) => {

  const { topping, size, vegetarian } = props.editPizza
  const updatePizza = props.updatePizza

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" name='topping' placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
                topping
              }
              onChange={ updatePizza }
              />
        </div>
        <div className="col">
          <select value={ size } name='size' className="form-control" onChange={ updatePizza }>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name='vegetarian' value={ true } checked={ vegetarian } onChange={ updatePizza }/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name='vegetarian' value={ false } checked={ !vegetarian } onChange={ updatePizza }/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={ props.patchPizza }>Submit</button>
        </div>
      </div>
  )
}

export default PizzaForm
