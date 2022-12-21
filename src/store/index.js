import tableReducer from "./reducers/tableReducer";
import todoReducer from "./reducers/todoReducer";
import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';






const rootReducer = combineReducers(
    {table: tableReducer,
    todos: todoReducer
}
);
//creating a store
const middleware = [thunk];
const store = createStore(rootReducer,{},compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    ));




export default store;