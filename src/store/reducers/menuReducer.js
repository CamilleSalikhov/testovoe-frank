 import { CHANGE_COLOR } from "../actions/changeMenu";


const  initialState = {};



function menuReducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_COLOR:
            return {menuColor :action.payload} 
         
        default:
            return state
                
    }
}


export default menuReducer;