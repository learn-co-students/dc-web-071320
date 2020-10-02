import React from 'react'
import { connect } from 'react-redux'

const ImageComponent = (props) => {
    return(
    <div>
        <img src={props.img} />
        <button onClick={() => props.changeImage()}>Change Image</button>
    </div>)
}

const mapStateToProps = (state) => {
    console.log(state)
    return {img: state.ImageReducer.img}
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeImage: (() => dispatch({type: "changeImage"}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(ImageComponent)