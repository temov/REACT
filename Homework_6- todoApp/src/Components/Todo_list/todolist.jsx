import { todoCart } from "../Todo_cart/todoCart"

export const TodoList = (props)=>{

    const{todos} = props;

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