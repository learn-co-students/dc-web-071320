import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SinglePainting extends Component{

    // componentDidMount(){
    //     console.log(this.props.match.params.id)
    //     // fetch request with the id
    //     //set state
    // }


    render(){
        console.log(this.props)
        return(<div>
            <p>Title: {this.props.location.painting.title}</p>
            <Link to="/paintings">Go back to list of paintings</Link>
         </div>)
    }

}

export default SinglePainting