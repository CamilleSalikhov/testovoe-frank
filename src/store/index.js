import tableReducer from "./reducers/tableReducer";
import todoReducer from "./reducers/todoReducer";
import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import imageReducer from "./reducers/imageReducer";
import sectionOneReducer from "./reducers/sectionOneReducer";
 
 






const rootReducer = combineReducers(
    {table: tableReducer,
    todos: todoReducer,
    image:imageReducer,
    sectionOne: sectionOneReducer
     
}
);
//creating a store
const middleware = [thunk];
const store = createStore(rootReducer,{},compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    ));




export default store;