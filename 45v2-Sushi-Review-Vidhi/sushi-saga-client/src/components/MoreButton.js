import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.displayMoreSushis()}>
            More sushi!
          </button>
}

export default MoreButton