import {legacy_createStore as createStore} from 'redux'
import { todoReducer } from './reducers/todoReducer';
// import { counterReducer } from './reducers/counterReducer';



const store = createStore(todoReducer);

export default store;