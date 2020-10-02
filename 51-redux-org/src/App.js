import React, {Component} from 'react'
import Header from './Header'
import Counter from './Counter'
import ImageComponent from './ImageComponent'


export default class App extends Component {
    
    render() {
    return (
        <div className="App">
        <Header />
        <Counter />
        <ImageComponent />
        </div>
    );
    }
}