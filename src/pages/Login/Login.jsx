import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Alert,
} from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useLoginState } from "./LoginController";
import { Person } from "@mui/icons-material";
import Logo from "../../components/Logo";

const defaultTheme = createTheme();

export default function SignIn() {
  const {
    data,
    handleChangeData,
    handleLogin,
    error,
    errorMessage,
  } = useLoginState();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Logo />
          <Box
            component="form"
            onSubmit={(event) => handleLogin(event)}
            noValidate
            sx={{ mt: 1 }}
            className="mt-5"
          >
            {/* Email field */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={data.email}
              onChange={handleChangeData}
            />
            {/* Password field */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              value={data.password}
              autoComplete="current-password"
              onChange={handleChangeData}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            {/* Error Message */}
            {error && <Alert severity="error">{errorMessage}</Alert>}
            <Grid item textAlign={"center"} marginTop={"10px"}>
              <Link href="/signup" variant="body2">
                {"Não tem uma conta? Cadastre-se"}
              </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
