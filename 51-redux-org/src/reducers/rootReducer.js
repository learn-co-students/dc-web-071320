import ImageReducer from './imageReducer'
import { combineReducers } from 'redux'

let initialState = {count: 0, text: "Friday!!", cases: []}

let reducer = (state = initialState, action) => {

  console.log("current State:", state)
  console.log("action:", action)
  console.log("========================")

  // switch statement
  switch(action.type){
    case "inc":
      return {
        ...state,
        count: state.count + action.payload 
      }
    case "dec":
      return{
        ...state,
        count: state.count - action.payload
      }
    case "loadCases":
        return{
            ...state,
            cases: action.payload
        }
    default:
      return state
  }

  // return state
}

const rootReducer = combineReducers({ImageReducer, reducer})

export default rootReducer