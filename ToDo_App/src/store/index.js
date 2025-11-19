import { legacy_createStore as createStore, combineReducers } from 'redux';
import { todoReducer } from './reducers/todoReducer';
import { counterReducer } from './reducers/counterReducer';


const rootReducer = combineReducers({
todos: todoReducer,
counter: counterReducer
});


const store = createStore(
rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;