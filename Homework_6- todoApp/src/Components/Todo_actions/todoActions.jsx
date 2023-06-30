
import {useDispatch,useSelector} from 'react-redux'

export const Actions = () =>{

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
            name:todoName,
            completed:false
        }



        dispatch({type:"ADD_TODO", payload:todo})
        dispatch({type:"TOTAL_COUNT_ADD", payload:totalCount})
    }

    const handleDeleteTodo = (id)=>{

            const filteredTodos = todos.filter(todo=>todo.id !== id)

        dispatch({ type: "DELETE_TODO", payload: filteredTodos});
        dispatch({type:"TOTAL_COUNT_DELETE", payload:totalCount})

    }

    const handleToggleTodo = (id)=>{

        const toggleTodos = todos.map(todo=>todo.id === id)

    dispatch({ type: "TOGGLE_TODO", payload: toggleTodos});
    dispatch({type:"TOGGLE_COUNT", payload:checkedCount})

}

    return(
        <div>
            <h1>Todo_name: {todoName}</h1>
            <input onChange = {handleChangeTodoName} type='text' placeholder='addTodo' value={todoName}/>
            <button onChange={handleAddTodo}>Add_Todo</button>
            <input onChange ={handleToggleTodo} type="checkbox"/>
            <button onClick={handleDeleteTodo}>X</button>

        </div>
           

    )
}