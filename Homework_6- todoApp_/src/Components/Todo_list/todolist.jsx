import { useSelector,useDispatch } from "react-redux";

export const TodoList = ()=>{

    

    const dispatch = useDispatch();
    const todoName = useSelector((state)=>state.todoName)
    const todos = useSelector((state)=>state.todos)
    

    const handleChangeTodoName = (event)=>{

        dispatch({ type: "SET_TODO_NAME", payload: event.target.value });
    }

    const handleAddTodo = ()=>{

        const todo = {
            id:Date.now(),
            title:todoName,
            completed:false
        }

        dispatch({type:"ADD_TODO", payload:todo})

    }

    const handleDeleteTodo = (todoid)=>{


        dispatch({ type: "DELETE_TODO", payload: todoid});


    }

    const handleToggleTodo = (todoid)=>{


    dispatch({ type: "TOGGLE_TODO", payload: todoid});

        

}

console.log(todos)
    return(
        <div>


            <h2>Todos List</h2>

                    <div>
                        <input
                            type="text"
                            value={todoName}
                            onChange={handleChangeTodoName}
                        />
                        <button onClick={handleAddTodo}>Add Todo</button>
                     </div>

                     <div >
                            {todos.map((todo) => (
                                
                                <div key={todo.id}>
                                    <span>{todo.title}</span>
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => handleToggleTodo(todo.id)}
                                    />
                                    <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
                                </div>
                            ))}
                    </div>
        </div>
       
            
       
            );
    };