import React from 'react';
// import Nav from './NavBar'
import 'semantic-ui-css/semantic.min.css';

import NavBar from './NavBar'
import {PaintingsDisplay} from './PaintingsDisplay'
import PaintingForm from './PaintingForm';
import paintings from './paintings'
import PaintingInfo from './PaintingInfo'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SinglePainting from './singlePainting';


class App extends React.Component {

  constructor(){
    super()
    this.state = {
      testNew: "testnew",
      test: "test",
      form: false,
      paintings: paintings //value is imported paintings
    }
  }

  toggleForm = () => {
    this.setState({
      form: !this.state.form
    })
  }

  addPainting = (e) => {
    e.preventDefault()

    let newPainting = {
      title: e.target[0].value,
      image: e.target[1].value,
      artist: {
        name: e.target[2].value
      }
    }

    this.setState({
      paintings: [...this.state.paintings, newPainting],
      form: !this.state.form
    })

  }


  render(){
  return (
    <BrowserRouter>
      <div>
      <NavBar/>
      {/* <button onClick={this.toggleForm}>Display/Hide form</button>
      {
        this.state.form
        ? <PaintingForm addPainting={this.addPainting}/> //true
        : <PaintingsDisplay paintings={this.state.paintings} /> //false
      } */}
      <Switch>
        {/* <Route path="/paintings/new" component={PaintingForm} /> */}
        <Route exact path="/paintings" render={(routerProps) => <PaintingsDisplay {...routerProps} paintings={this.state.paintings} />} />
  
        <Route path ="/paintings/new" render={(routerProps) => <PaintingForm {...routerProps} addPainting={this.addPainting}/>} />

        <Route path="/paintings/:id" component={SinglePainting}/>

      </Switch>
      
      </div>
    </BrowserRouter>
   
  );
  }
}

export default App;
