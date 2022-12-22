 import { CHANGE_COLOR } from "../actions/changeMenu";
 import { CHANGE_TEXT } from "../actions/changeText";


const  initialState = {};



function sectionOneReducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_COLOR:
            return {
                ...state,
                menuColor :action.payload
            } 
         
        case CHANGE_TEXT:
        return {
            ...state,
            text :action.payload
        } 
        
        default:
            return state
                
    }
}


export default sectionOneReducer;