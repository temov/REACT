export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_TODOS = "CLEAR_TODOS";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { id: Date.now(), text, done: false }
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id
});

export const clearTodos = () => ({
  type: CLEAR_TODOS,
});