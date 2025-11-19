import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo,clearTodos } from '../../store/actions/todoActions';
import { List, Paper } from '@mui/material';
import { TodoInput } from './TodoInput';
import { TodoItem } from './TodoItem';
import { useTheme } from '@mui/material/styles';
import {Box, Button} from "@mui/material";


export const TodoList = () => {
const todos = useSelector(state => state.todos);
const dispatch = useDispatch();
const theme = useTheme();


const handleAdd = (text) => dispatch(addTodo(text));
const handleDelete = (todo) => dispatch(deleteTodo(todo.id));
const handleToggle = (todo) => dispatch(toggleTodo(todo.id));

const handleClearTodos = () => {
  dispatch(clearTodos());         // Clear Redux state
  localStorage.setItem("todos", JSON.stringify([]));  // Clear localStorage
};


return (
<Paper elevation={4} sx={{ p: 3, borderRadius: 3, bgcolor: theme.palette.background.paper, boxShadow: 3 }}>
<TodoInput onAdd={handleAdd} />
<List>
{todos.map(todo => (
<TodoItem
key={todo.id}
todo={todo}
onToggle={handleToggle}
onDelete={handleDelete}
/>
))}
</List>
    {/* Clear Todos Button */}
      {todos.length > 0 && (
        <Box sx={{ textAlign: 'center', mt: 3}}>
          <Button
            variant="outlined"
            onClick={handleClearTodos}
            sx={{ fontWeight: 'bold', color:"#2222ffff", ":hover": {backgroundColor: "#2222ffff", color: "white"}}}
          >
            Clear Todos List
          </Button>
        </Box>
      )}
</Paper>
);
};