import React from 'react'

const HogDetails = (props) => {
    return(<div>
        <h5>{props.specialty}</h5>
        <h5>{props.greased ? "Hog is Greased" : "Hog is not Greased"}</h5>
        <h5>{props.weight}</h5>
        <h5>{props["highest medal achieved"]}</h5>
    </div>)
}

export default HogDetails