import data from "../../tableData";
import { SELECT_OPTION } from "../actions/selectOption";
import { SEARCH_VALUE } from "../actions/setSearchValue";

const  initialState = {
    table:data,
    searchValue:''
};



function tableReducer(state = initialState, action) {
    switch(action.type) {
        case SELECT_OPTION:
            return {
                ...state,
                table: action.payload
            }
        case SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload
            }
         
        default:
            return state
                
    }
}


export default tableReducer;