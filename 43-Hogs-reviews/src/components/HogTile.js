import React from 'react'
import HogDetails from './HogDetails'

const HogTile = (props) => {

    let imgTitle = props.hog.name.split(" ").join("_").toLowerCase()

    // console.log(imgTitle)
    return(
    <div>
        <img src={require(`../hog-imgs/${imgTitle}.jpg`)} onClick={() => props.showHog(props.hog)} />
        <h3>{props.hog.name}</h3>

        { props.hog.clicked
        ? <HogDetails {...props.hog} hog={props.hog} hideHog={props.hideHog} />
        : null }
        
        <button onClick={() => props.hideHog(props.hog)}>Hide the Hog</button>
    </div>)
}

export default HogTile