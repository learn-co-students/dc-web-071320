import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import PreviousButton from '../components/PreviousButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const sushi = props.sushi.map( sushi =>
    <Sushi
      key = { sushi.id }
      sushi = { sushi }
      eatSushi = { props.eatSushi }
      eatenSushi = { props.eatenSushi }
    />
  )

  return (
    <Fragment>
      <div className="belt">
        <PreviousButton
          previousFourSushi = { props.previousFourSushi }
        />
        {
          /* 
            Rende r Sushi components here!
          */
          sushi
        }
        <MoreButton
          nextFourSushi = { props.nextFourSushi }
        />
      </div>
    </Fragment>
  )
}

export default SushiContainer