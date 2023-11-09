import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBNavbarItem
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import React from "react";
import { useUser } from "../context/UserContext";
import { Person } from "@mui/icons-material";
import Avatar from "./Avatar";

export default function AvatarDropdown() {
  const { user } = useUser();
  const { avatar_url } = user || <Person />;
  return (
    <MDBNavbarItem>
      <MDBDropdown>
        <MDBDropdownToggle
          tag="a"
          className="nav-link d-flex align-items-center"
          href="#"
        >
          <Avatar imgUrl={avatar_url} />
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem>
            <Link to="">Painel Administrativo</Link>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <Link to="">Perfil</Link>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <Link to="">Logout</Link>
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBNavbarItem>
  );
}
