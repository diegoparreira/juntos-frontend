import React, { useState } from "react";
import {
  MDBIcon,
  MDBRipple,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { useUser } from "../context/UserContext";

export default function Sidebar({handleChange}) {
  const { user } = useUser();

  return (
    <>
      <MDBListGroup flush className="mx-3 mt-4 h-100 d-flex justify-content-center ">
        <MDBRipple rippleTag="span">
          <MDBListGroupItem
            tag="a"
            action
            name="users"
            className="border-0 border-bottom rounded rounded"
            disabled={user.type === 'admin'}
            onClick={(e) => handleChange(e.target.name)}
          >
            <MDBIcon fas icon="user-alt me-3" />
            Usuários
          </MDBListGroupItem>
        </MDBRipple>

        <MDBRipple rippleTag="span">
          <MDBListGroupItem
            tag="a"
            action
            name="contents"
            className="border-0 border-bottom rounded"
            aria-current="true"
            onClick={(e) => handleChange(e.target.name)}
          >
            <MDBIcon fas icon="align-justify me-3" />
            Conteúdos
          </MDBListGroupItem>
        </MDBRipple>

        <MDBRipple rippleTag="span">
          <MDBListGroupItem
            tag="a"
            action
            name="categories"
            className="border-0 border-bottom rounded"
            onClick={(e) => handleChange(e.target.name)}
          >
            <MDBIcon fas icon="align-justify me-3" />
            Categorias
          </MDBListGroupItem>
        </MDBRipple>

        <MDBRipple rippleTag="span">
          <MDBListGroupItem
            tag="a"
            action
            name="comments"
            className="border-0 border-bottom rounded"
            onClick={(e) => handleChange(e.target.name)}
          >
            <MDBIcon fas icon="align-justify me-3" />
            Comentários
          </MDBListGroupItem>
        </MDBRipple>

        <MDBRipple rippleTag="span">
          <MDBListGroupItem
            tag="a"
            href="#"
            action
            name="answers"
            className="border-0 border-bottom rounded"
            onClick={(e) => handleChange(e.target.name)}
          >
            <MDBIcon fas icon="align-justify me-3" />
            Respostas
          </MDBListGroupItem>
        </MDBRipple>
      </MDBListGroup>
    </>
  );
}
