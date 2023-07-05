import {combineReducers, legacy_createStore as createStore} from 'redux'
import { todoReducer } from './reducers/todoReducer';
import { counterReducer } from './reducers/counterReducer';

const rootReducer = combineReducers({
    todoReducer,
    counterReducer
})

const store = createStore(rootReducer);

export default store;