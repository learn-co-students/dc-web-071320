import React from 'react'

const Stock = (props) => {
  let {name, ticker, price,id} = props.stockProp
  return (<div>

    <div className="card" onClick={() => props.handleStock(id)}>
      <div className="card-body">
        <h5 className="card-title">{
            name
          }</h5>
        <p className="card-text">{
            `${ticker} : ${price}`
          }</p>
      </div>
    </div>


  </div>)
};



export default Stock
