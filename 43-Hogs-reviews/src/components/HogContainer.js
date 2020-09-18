import HogTile from './HogTile'
import React from 'react'

const HogContainer = (props) => {
    return(<div>
        {props.hogs.filter(hog => !hog.hidden).map(hog => <HogTile hog={hog} showHog={props.showHog} hideHog={props.hideHog} /> )}
    </div>)
}

export default HogContainer