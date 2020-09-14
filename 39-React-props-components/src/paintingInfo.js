import React, { Component } from 'react'

// class PaintingInfo extends React.Component{}
class PaintingInfo extends Component{

    render(){
       return(
        <div>
           <div>
             <h2>Painting Title: {this.props.painting.title}</h2>
             <br />
             <img src={this.props.painting.image} />
             <br/>
             <p>Artist Name: {this.props.painting.artist.name} </p>
             <br/>
             <br/>
         </div>
        </div>
       )
    }

}

// const PaintingInfo = (props) => {
//     return(
//         <div>
//             <h2>Painting Title: {props.painting.title}</h2>
//             <br />
//             <img src={props.painting.image} />
//             <br/>
//             <p>Artist Name: {props.painting.artist.name} </p>
//             <br/>
//             <br/>
//         </div>
//     )
// }

export default PaintingInfo