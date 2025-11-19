import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Paper } from '@mui/material';


export const Counter = () => {
const todos = useSelector(state => state.todos);
const totalCount = todos.length;
const checkedCount = todos.filter(todo => todo.done).length;


return (
<Paper elevation={6} sx={{ p: 3, display: 'flex', justifyContent: 'space-around', mb: 4, borderRadius: 3, bgcolor: 'primary.light' }}>
<Box sx={{ textAlign: 'center' }}>
<Typography variant='subtitle1'>Total Todos</Typography>
<Typography variant='h4' sx={{ fontWeight: 'bold' ,color:"#2222ffff"}}>{totalCount}</Typography>
</Box>
<Box sx={{ textAlign: 'center' }}>
<Typography variant='subtitle1'>Completed</Typography>
<Typography variant='h4' sx={{ fontWeight: 'bold', color:"#2222ffff"}}>{checkedCount}</Typography>
</Box>
</Paper>
);
};