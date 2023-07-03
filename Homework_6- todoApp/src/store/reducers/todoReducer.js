
const initialState ={
    todoName:"",
    todos:[]
}

export const todoReducer = (state = initialState,action)=>{

    switch (action.type) {
        case "SET_TODO_NAME":
            
            return{
                ...state,
                todoName:action.payload
            }
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload],
                todoName: "",
            };


        case "DELETE_TODO":

        const filteredTodos = state.todos.filter((todo) => todo.id !== action.payload.id)
            return {
                ...state,
                todos: [filteredTodos],
              };

        case "TOGGLE_TODO":

            const completedTodos = state.todos.map((todo) =>
            todo.id === action.payload.id
              ? { ...todo, completed: !todo.completed }
              : todo )
            return {
                ...state,
                todos:[completedTodos] 
               
              };
    
        default:
            return state;
    }


}