import { Counter } from "./Components/Counter/counter"
import { Actions } from "./Components/Todo_actions/todoActions"
import { TodoList } from "./Components/Todo_list/todolist"
import { Provider } from "react-redux";
import store from "./store";


function App() {
  

  return (
    <>
    <Provider store={store}>
          <Counter/>
          <hr/>
          <TodoList/>
          <Actions />
    </Provider>
    </>
  )
}

export default App
