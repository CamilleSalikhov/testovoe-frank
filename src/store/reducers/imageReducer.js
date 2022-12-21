import { ADD_IMAGE } from "../actions/addImage";


const  initialState = {};



function imageReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_IMAGE:
            return action.payload 
         
        default:
            return state
                
    }
}


export default imageReducer;