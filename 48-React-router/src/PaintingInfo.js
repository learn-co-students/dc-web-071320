import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class PaintingInfo extends Component{
    
    render(){
        return(  <div>
                    <h2>{this.props.painting.title}</h2>
                    <img src={this.props.painting.image}/>
                    <p>Artist Name: {this.props.painting.artist.name}</p>

                    <Link 
                    to = {{
                        pathname: `/paintings/${this.props.painting.id}`,
                        testvalue: "hello",
                        painting: this.props.painting
                    }}> 
                    {/* Sending props using Link */}
                    Go to Single Painting's page 
                    </Link>
                    {/* <h5>current painting id is: {this.props.match.params.id}</h5> */}
               </div>)
    }

}

export default PaintingInfo;