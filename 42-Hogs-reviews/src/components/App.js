import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Filter from "./Filter";
import HogContainer from "./HogContainer";

class App extends Component {

  constructor(){
    super()
    this.state = {
      hogs: hogs.map(hog => {return {...hog, clicked: false}}),
      displayHogs: hogs.map(hog => {return {...hog, clicked: false}})
      // hogs
    }
  }

  showHog = (clickedHog) => {
    // debugger

    let newHogsArray = this.state.hogs.map(hog => {
      if(hog === clickedHog){
        // debugger
        // hog.clicked = !hog.clicked
        return {...hog, clicked: !hog.clicked}
      }
      return hog
    })

    // let newDisplayHogsArray = this.state.displayHogs.map(hog => {
    //   if(hog === clickedHog){
    //     // debugger
    //     // hog.clicked = !hog.clicked
    //     return {...hog, clicked: !hog.clicked}
    //   }
    //   return hog
    // })

    // console.log(newHogsArray, newDisplayHogsArray)

    this.setState({
      hogs: newHogsArray,
      // displayHogs: newDisplayHogsArray
    })
  }

  filterHogs = (type) => {
    // debugger
    // if(type === "filter"){
    //   this.setState({
    //     hogs: this.state.hogs.filter(hog => hog.greased)
    //   })
    // }

    switch(type){
      case "filter":
        this.setState({
          // displayHogs: this.state.hogs.filter(hog => hog.greased)
          hogs: this.state.hogs.filter(hog => hog.greased)

        })
        break
      case "name":
        this.setState({
          // displayHogs: this.state.hogs.sort((a,b) => a.name.localeCompare(b.name))
          hogs: this.state.hogs.sort((a,b) => a.name.localeCompare(b.name))

        })
        break
      case "weight":
        this.setState({
          // displayHogs: this.state.hogs.sort((a,b) => a.weight - b.weight)
          hogs: this.state.hogs.sort((a,b) => a.weight - b.weight)

        })
        break
      default:
        console.log("Not a choice")
    }

  }


  render() {
    return (
      <div className="App">
        <Nav />
        <Filter filterHogs={this.filterHogs} />
        <HogContainer 
        // hogs={this.state.displayHogs}
        hogs={this.state.hogs}
        showHog={this.showHog} />
      </div>
    );
  }
}

export default App;
