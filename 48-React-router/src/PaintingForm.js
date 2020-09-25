import React from 'react'
import { Link }  from 'react-router-dom'

export default class PaintingForm extends React.Component{

    handleSubmit = () => {
        console.log(this.props)
        this.props.history.push("/paintings") //redirect
    }


    render(){
        return(<div>
            PaintingForm:
            <form onSubmit={(e) => {
                this.props.addPainting(e)
                this.handleSubmit() //created for redirecting
                }
                }>
                <input type='text' placeholder='Painting Title'/>
                <input type='text' placeholder='Painting Image URL'/>
                <input type='text' placeholder='Artist Name'/>
                <input type='submit' value='Add Painting'/> 
            </form>
           <Link to="/paintings"> Show All Paintings </Link> 
           {/* User can click to go to different path */}

        </div>)
    }
}