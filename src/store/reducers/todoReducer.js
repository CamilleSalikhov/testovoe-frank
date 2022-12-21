import { DELETE_TODO } from "../actions/deleteTodo";
import { ADD_TODO } from "../actions/addTodo";
import { CHANGE_TODO } from "../actions/changeTodo";
import { act } from "react-dom/test-utils";
 


const  initialState = [{
    text: 'Сделать тудулист',
    id: 43434,
    done: false
},
{
    text: 'сходить в магазин',
    id: 4328,
    done:true
}
];



function todoReducer(state = initialState, action) {
    switch(action.type) {
        case DELETE_TODO:
            return [
                ...state.filter((item, index) => index !== action.payload)

            ]
        case CHANGE_TODO:
            return (state.map(e => e.id === action.payload.id ? action.payload : e))
                 

        case ADD_TODO:
            return [
                ...state,
                action.payload

            ] 
             
        default:
            return state
                
    }
}


export default todoReducer;