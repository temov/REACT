
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, CLEAR_TODOS } from '../actions/todoActions';

// Load todos from localStorage if available
const persistedTodos = JSON.parse(localStorage.getItem('todos')) || [];

const initialState = persistedTodos;

export const todoReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case ADD_TODO:
      newState = [...state, action.payload];
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;

    case DELETE_TODO:
      newState = state.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;

    case TOGGLE_TODO:
      newState = state.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;

    case CLEAR_TODOS:
    return [];

    default:
      return state;
  }
};