import { useSelector,useDispatch } from "react-redux";

export const TodoList = ()=>{

    

    const dispatch = useDispatch();
    const todoName = useSelector((state)=>state.todoReducer.todoName)
    const todos = useSelector((state)=>state.todoReducer.todos)
    const totalCount = useSelector((state)=>state.counterReducer.totalCount)
    const checkedCount = useSelector((state)=>state.counterReducer.checkedCount)

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
        dispatch({type:"TOTAL_COUNT_ADD", payload:totalCount})

        console.log(todos);
    }

    const handleDeleteTodo = ()=>{


        dispatch({ type: "DELETE_TODO", payload: todos});
        dispatch({type:"TOTAL_COUNT_DELETE", payload:totalCount})

    }

    const handleToggleTodo = ()=>{


    dispatch({ type: "TOGGLE_TODO", payload: todos});
    dispatch({type:"TOGGLE_COUNT", payload:checkedCount})

}


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
                                        onChange={handleToggleTodo}
                                    />
                                    <button onClick={handleDeleteTodo}>X</button>
                                </div>
                            ))}
                    </div>
        </div>
       
            
       
            );
    };