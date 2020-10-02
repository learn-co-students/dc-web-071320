import React, {Component} from 'react'
import { connect } from 'react-redux'

class Counter extends Component {

    componentDidMount(){
        fetch("https://api.covid19api.com/summary")
        .then(res => res.json())
        .then(info => this.props.loadData(info.Countries))
    }

  
    // increment = (amount) => {
    //   store.dispatch({type: "inc", payload: amount}) // action as an arg
    // }
  
    // decrement = (amount) => {
    //   store.dispatch({type: "dec", payload: amount})
    // }
  
    render() {
      return (
        <div className="Counter">
          {/* <h1> */}
            {/* Count: {store.getState().count} */}
          {/* </h1> */}
          <h1>Count: {this.props.count}</h1>
          {/* <button onClick={() => this.props.dispatch({type: "dec", payload: 1})}> - </button> */}
          <button onClick={() => this.props.dec(1)}> - </button>
          <button onClick={() => this.props.inc(1)}> + </button>
          <button onClick={() => this.props.dec(3)}> -3 </button>
          <button onClick={() => this.props.inc(5)}> +5 </button>
        </div>
      );
    }
  
  }

  const mapStateToProps = (state) => {
    console.log("From Counter component",state)
    // return {count: state.count}
    return {count: state.reducer.count, cases: state.reducer.cases}

  }

  const mapDispatchToProps = (dispatch) => {
    //   console.log(dispatch)
      return {
          inc: ((amount) => dispatch({type: "inc", payload: amount})),
          dec: ((amount) => dispatch({type:"dec", payload: amount})),
          loadData: ((data) => dispatch({type: "loadCases", payload: data}))
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Counter)