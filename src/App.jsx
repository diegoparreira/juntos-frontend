import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from './context/UserContext';
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import { PrivateRoutes } from './components/PrivateRoutes';
import SignUp from './pages/SignUp/SignUp';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AdminRoutes } from './components/AdminRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {

  return (
    <div className="App">
      <UserProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route element={<PrivateRoutes />}>
                <Route element={<Home/>} path="/home" exact/>
              </Route>
              {/* User dando null na hora que carrega componente */}
              <Route element={<AdminRoutes />}>
                <Route element={<Admin/>} path="/admin" exact/>
              </Route>

            </Routes>
          </Router>
        </LocalizationProvider>
      </UserProvider>
    </div>
  );
}

export default App;
