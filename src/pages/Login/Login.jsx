import React from 'react';
import { Button, TextField, Typography, Container, Paper } from '@mui/material';
import { useLoginState } from './LoginController';

function LoginPage() {

  const {email, setEmail, password, setPassword, loggedIn, handleLogin} = useLoginState();

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" align="center">
          Faça login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <TextField
          label="Senha"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
        >
          Entrar
        </Button>
        {loggedIn && (
          <Typography variant="subtitle1" align="center" style={{ marginTop: '10px' }}>
            Login bem-sucedido!
          </Typography>
        )}
      </Paper>
    </Container>
  );
}

export default LoginPage;