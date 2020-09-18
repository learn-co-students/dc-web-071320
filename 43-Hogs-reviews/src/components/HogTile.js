import React from 'react'
import HogDetails from './HogDetails'

const HogTile = (props) => {

    let imgTitle = props.hog.name.split(" ").join("_").toLowerCase()

    // console.log(imgTitle)
    return(
    <div onClick={() => props.showHog(props.hog)}>
        <img src={require(`../hog-imgs/${imgTitle}.jpg`)} />
        <h3>{props.hog.name}</h3>

        { props.hog.clicked
        ? <HogDetails {...props.hog} hog={props.hog} />
        : null }
        
    </div>)
}

export default HogTile