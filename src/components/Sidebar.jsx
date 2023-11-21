import React from "react";
import {
  MDBIcon,
  MDBRipple,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { useUser } from "../context/UserContext";
import { useNavContext } from "../context/NavContext";
import navValues from '../utils/navValues';

export default function Sidebar() {
  const { user } = useUser();
  const { nav } = useNavContext();
  console.log(nav.navigate);

  return (
    <>
      <MDBListGroup flush className="mx-3 mt-4 h-100 d-flex justify-content-center ">
        <MDBRipple rippleTag="span">
          <MDBListGroupItem
            tag="a"
            action
            name="users"
            className="border-0 border-bottom rounded rounded"
            disabled={user.type !== 'admin'}
            onClick={() => nav.navigate(navValues.users)}
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
            onClick={() => nav.navigate(navValues.contents)}
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
            onClick={() => nav.navigate(navValues.categories)}
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
            onClick={() => nav.navigate(navValues.comments)}
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
            onClick={() => nav.navigate(navValues.answers)}
          >
            <MDBIcon fas icon="align-justify me-3" />
            Respostas
          </MDBListGroupItem>
        </MDBRipple>
      </MDBListGroup>
    </>
  );
}
