import React, { useState } from 'react'


const Counter = () => {

    // initiate a state
    const [count, changeCount] = useState(0)
    const [sum, changeSum] = useState(0)
    const [test, changeTest] = useState("Monday!")

    // array destructuring
    // useState(initial_value) => [state, a_function_to_change_state]

    // const count = useState(0)[0]
    // const changeCount = useState(0)[1]

    const handleCount = () => {
        if(count < 10){
            changeCount( count + 1)
        }
    }

    return(<div>
        <h4>Current count: {count} </h4>
        <button className="ui teal button"
        onClick={() => handleCount()} >
            Increment
        </button>

        {/* <h3> Today is {test} </h3>
        <button
        onClick = {() => changeTest("Tuesday!!!")}>
            Change Day
            </button> */}
    </div>)
}

// class Counter extends React.Component{

//     constructor(){
//         super()
//         this.state = {
//             count: 0
//         }
//     }

//     incrementCounter = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     render(){
//         return(
//         <div>
//             <h4>
//                 Current Count: {this.state.count}
//             </h4>
//             <button 
//             className="ui teal button" 
//             onClick={() => this.incrementCounter()} >
//                 Increment Counter
//             </button>
//         </div>)
//     }

// }


export default Counter