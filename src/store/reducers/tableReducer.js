import data from "../../tableData";
import { SELECT_OPTION } from "../actions/selectOption";


const  initialState = data;



function tableReducer(state = initialState, action) {
    switch(action.type) {
        case SELECT_OPTION:
            return action.payload 
         
        default:
            return state
                
    }
}


export default tableReducer;