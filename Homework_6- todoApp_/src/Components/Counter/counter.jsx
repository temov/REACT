import { useSelector } from "react-redux";

export const Counter = ()=>{

const todos = useSelector((state) => state.todos)
const todosTotal = todos.length;
const todosCompleted = todos.filter((todo) => todo.completed).length;

return(
    <div>
        <h1>Counter: Total_todos:{todosTotal}, checked_todos:{todosCompleted}</h1>
    </div>
   
        
   
)
}