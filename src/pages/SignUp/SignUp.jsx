import React from "react";
import { Avatar, Button, TextField, Link, Grid, Box, Typography, Container, Alert } from '@mui/material/';
import CssBaseline from "@mui/material/CssBaseline";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Person } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSignUpState } from "./SignUpController";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

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
    console.log('Debug changeValue');
    console.log('e.target.name: ' + e.target.name);
    console.log('e.target.value: ' + e.target.value);
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
          <Avatar sx={{ m: 1, bgcolor: "#45bf00" }}>
            <Person />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={event => handleSignUp(event)}
            sx={{ mt: 3 }}
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
                  label="Email Address"
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
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
