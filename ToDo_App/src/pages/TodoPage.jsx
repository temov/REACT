import React from 'react';
import { Container, Box, Typography, Divider } from '@mui/material';
import { Counter } from '../Components/Counter/counter';
import { TodoList } from '../Components/Todo/TodoList';


export default function TodoPage() {
return (
<Box sx={{ minHeight: '100vh', bgcolor: '#7660e4ff', py: 5 }}>
<Container maxWidth='md'>
<Typography variant='h2' sx={{ mb: 3, fontWeight: 'bold', color: '#060a2aff'  }}>
Your Todo List
</Typography>
<Counter />
<Divider sx={{ my: 3 }} />
<TodoList />
</Container>
</Box>
);
}