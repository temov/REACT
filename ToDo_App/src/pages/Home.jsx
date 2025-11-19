import React from 'react';
import { Container, Typography, Button, Box, AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

   return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>ToDo App</Typography>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
          bgcolor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="350">
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            Smart ToDo App
          </Typography>

          {/* Description Box */}
          <Box
            sx={{
              bgcolor: 'white',
              color: 'black',
              borderRadius: 2,
              boxShadow: 3,
              p: 3,
              mb: 9,
              fontSize: '1rem',
            }}
          >
            <Typography sx = {{fontSize:"1.5rem", color:"#374eb9ff", size: "Large"}} variant="body1">
              This app is built with <strong>React</strong> and <strong>Redux</strong> for state management, styled with <strong>Material UI</strong>. 
              Todos are saved in <strong>localStorage</strong> so your tasks persist between sessions.
            </Typography>
          </Box>

          {/* CTA Button */}
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/todoPage')}
            sx={{ px: 5, py: 1.5, fontSize: '1.2rem', fontWeight: 'bold' }}
          >
            Open Todo App
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: '#333', color: 'white', py: 2, textAlign: 'center' }}>
        <Typography variant="body2">© 2025 TT Web Design. All rights reserved.</Typography>
      </Box>
    </Box>
  );
}