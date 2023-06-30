import { useSelector } from "react-redux";

export const TodoList = ()=>{

    const todos = useSelector((state) => state.todoReducer.todos);


    return(
        <div>
            {todos.map(todo=>{

                    <todoCart key={todo.id} todo={todo}/>
            })}
            
            <input type="text" placeholder="add_todo"/>
            <button>Add_todo</button>
        </div>
       
            
       
    )
    }