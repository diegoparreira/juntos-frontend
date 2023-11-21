import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBNavbarItem
} from "mdb-react-ui-kit";
import { Link, redirect } from "react-router-dom";
import React from "react";
import { useUser } from "../context/UserContext";
import { Person } from "@mui/icons-material";
import Avatar from "./Avatar";

export default function AvatarDropdown() {
  const { user, logout } = useUser();
  const { avatar } = user || <Person />;

  const handleLogout = () =>{
    logout();
    redirect('/');
  }

  return (
    <MDBNavbarItem>
      <MDBDropdown>
        <MDBDropdownToggle
          tag="a"
          className="nav-link d-flex align-items-center"
          href="#"
        >
          <Avatar imgUrl={avatar} />
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem>
            <Link className="mx-1" to="/admin">Painel Administrativo</Link>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <Link className="mx-1" to="/profile">Perfil</Link>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <Link className="mx-1" onClick={handleLogout}>Logout</Link>
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBNavbarItem>
  );
}
