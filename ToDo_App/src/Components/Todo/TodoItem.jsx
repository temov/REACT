import React from 'react';
import { ListItem, ListItemText, Checkbox, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


export const TodoItem = ({ todo, onToggle, onDelete }) => {
return (
<Paper elevation={3} sx={{ mb: 1, p: 1, display: 'flex', alignItems: 'center', borderRadius: 2, transition: 'all 0.2s', '&:hover': { boxShadow: 6 } }}>
<Checkbox checked={todo.done} onChange={() => onToggle(todo)} />
<ListItemText
primary={todo.text}
sx={{ textDecoration: todo.done ? 'line-through' : 'none', ml: 1 }}
/>
<IconButton edge='end' aria-label='delete' onClick={() => onDelete(todo)}>
<DeleteIcon />
</IconButton>
</Paper>
);
};