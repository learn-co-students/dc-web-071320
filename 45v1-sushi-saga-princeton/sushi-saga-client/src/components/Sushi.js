import React, { Fragment } from 'react'

const Sushi = (props) => {

  const { id, name, img_url, price } = props.sushi

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={/* Give me a callback! */ () => props.eatSushi( props.sushi ) }>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.eatenSushi.includes( id ) ?
            null
          :
            <img src={/* Give me an image source! */ img_url } width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {/* Give me a name! */ name } - ${/* Give me a price! */ price }
      </h4>
    </div>
  )
}

export default Sushi