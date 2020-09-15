import React from 'react'

const PaintingForm = (props) => {

    return(
        <div>
            <form onSubmit={(e) => props.addPainting(e)}>
                <input type="text" placeholder="Title"/>
                <input type="text" placeholder="Image URL"/>
                <input type="text" placeholder="Artist"/>
                <input type="submit" value="Add Painting"/>
            </form>
        </div>
    )

}

export default PaintingForm