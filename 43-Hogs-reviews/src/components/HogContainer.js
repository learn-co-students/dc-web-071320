import HogTile from './HogTile'
import React from 'react'

const HogContainer = (props) => {
    return(<div>
        {props.hogs.map(hog => <HogTile hog={hog} showHog={props.showHog} /> )}
    </div>)
}

export default HogContainer