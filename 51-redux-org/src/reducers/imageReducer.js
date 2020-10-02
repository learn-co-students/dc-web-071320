let initialState = {
    img: "https://i.pinimg.com/originals/65/e2/eb/65e2eb250a835562f002518459a549de.gif"
}

let ImageReducer = (state= initialState, action) =>  {

    switch(action.type){
        case "changeImage":
            return{
                ...state,
                img: "https://media1.tenor.com/images/aeb3efaaa62c310ee54b7e347860a77e/tenor.gif"
            }
        
        default:
            return state
    }
}

export default ImageReducer