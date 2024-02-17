import React from "react";
import { Avatar, Button, TextField, Link, Grid, Box, Typography, Container, Alert } from '@mui/material/';
import CssBaseline from "@mui/material/CssBaseline";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSignUpState } from "./SignUpController";
import Logo from "../../components/Logo";

const defaultTheme = createTheme();

export default function SignUp() {
  const {
    newUser,
    setNewUser,
    birthdate,
    setBirthdate,
    error,
    handleSignUp
  } = useSignUpState();

  const changeValue = ((e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value});
  });

  const handleDateChange = (e) => {
    console.log('Debug date: ');
    console.log(e);
    setBirthdate(e);
    setNewUser({...newUser, birthdate: e.toJSON()});
  }

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
            noValidate
            onSubmit={event => handleSignUp(event)}
            className="mt-5"
          >
            <Grid container spacing={2}>
              {/* Firstname field */}
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={newUser.firstName}
                  onChange={changeValue}
                  autoFocus
                />
              </Grid>
              {/* Lastname field */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={newUser.lastName}
                  onChange={changeValue}
                />
              </Grid>
              {/* Email field */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={newUser.email}
                  onChange={changeValue}
                />
              </Grid>
              {/* Username field */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  value={newUser.username}
                  onChange={changeValue}
                />
              </Grid>
              {/* Password field */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={newUser.password}
                  onChange={changeValue}
                />
              </Grid>
              {/* Avatar picture link */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="avatar"
                  label="Url de alguma foto"
                  type="text"
                  id="avatar"
                  autoComplete="avatar"
                  value={newUser.avatar}
                  onChange={changeValue}
                />
              </Grid>
              {/* Birthdate field */}
              <Grid item xs={12}>
                <DatePicker
                  required
                  name="birthdate"
                  label="Birthdate"
                  id="birthdate"
                  format="YYYY-MM-DD"
                  value={birthdate}
                  onChange={handleDateChange}
                />
              </Grid>
            </Grid>
            {/* Error Message */}
            {error.error && <Alert severity="error">{error.message}</Alert>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/" variant="body2">
                  Já possui uma conta? Faça o login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
