import React, { useState } from 'react';
import { Box, TextField, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


export const TodoInput = ({ onAdd }) => {
const [text, setText] = useState('');


    const handleAdd = () => {
        if (text.trim() !== '') {
            onAdd(text);
            setText('');
        }
    };


return (
<Box sx={{ display: 'flex', mb: 3, gap: 1, alignItems: 'center' }}>
<TextField
fullWidth
placeholder='Add a new Todo...'
value={text}
onChange={e => setText(e.target.value)}
size='medium'
sx={{ bgcolor: 'white', borderRadius: 2, boxShadow: 1 }}
/>
<Fab color='primary' onClick={handleAdd} size='medium' sx={{ boxShadow: 3 }}>
<AddIcon />
</Fab>
</Box>
);
};