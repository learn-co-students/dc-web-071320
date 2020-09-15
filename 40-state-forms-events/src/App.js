import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { NavBar } from './NavBar'
import 'semantic-ui-css/semantic.min.css'
import paintingArray from './paintings-array'
import PaintingInfo from './paintingInfo';
import PaintingForm from './PaintingForm';

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      text: "Painting-App",
      test: true,
      // paintingArray: paintingArray
      paintingArray
    }
    // console.log("constructor method!!")
  }

  // state = {
  //   day: "Tuesday!!"
  // }

  changeText = () => {
    // debugger
    this.setState({
      text: "Tuesday Afternoon!!"
    })
  }

  addPainting = (e) => {
    // debugger
    e.preventDefault()
    // event.preventDefault()
    // console.log(event)

    let title = e.target[0].value
    let imageUrl = e.target[1].value
    let artist = e.target[2].value

    let newPainting = {
      title: title,
      image: imageUrl,
      artist: {
        name: artist
      }
    }

    // artist["name"] = artist

    // this.setState({
    //   paintingArray: [newPainting, ...this.state.paintingArray] //this.state.paintingArray.push(newPainting) => returns length of the array
    // })

    this.setState({
      paintingArray: [newPainting, ...this.state.paintingArray] //this.state.paintingArray.push(newPainting) => returns length of the array
    }, () => console.log(this.state.paintingArray) )

    

    // console.log(this.state.paintingArray.length) 
    console.log(this.state.paintingArray) 


  }

  render(){
 // console.log(paintingArray)
  console.log("render method")
  // console.log(this.state.text)
    // NEVER DO FOLLOWING
    // this.setState({
    //   test: false
    // })
  return (
      <div>
        {/* <p>{this.state.text}</p>
        <button onClick={() => this.changeText()}>Change it!!</button> */}
        {/* <button onClick={this.changeText}>Change it!!</button> */}

        <NavBar color="red" icon="paint brush" text={this.state.text}  />
        
        <PaintingForm addPainting={this.addPainting} />

        {
        this.state.paintingArray.map(painting => <PaintingInfo painting={painting} key={painting.id} />)
        }
      </div>
    );
  }
 
}

export default App;
