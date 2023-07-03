import { Counter } from "./Components/Counter/counter"
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
    </Provider>
    </>
  )
}

export default App
