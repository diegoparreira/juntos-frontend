import { useEffect, useState } from "react";
import { MDBBtn, MDBTable } from "mdb-react-ui-kit";
import TableHead from "./Table/TableHead";
import TableBody from "./Table/TableBody";
import useGetRequest from "../../hooks/useGetRequest";
import usePostRequest from "../../hooks/usePostRequest";
import { Alert } from "react-bootstrap";

export default function TableGen({ selectedModel, approve }) {
  const [data, setData] = useState();
  const [listToUpdate, setListToUpdate] = useState([]);
  const [statusResponse, setStatusResponse] = useState({});
  const [keys, setKeys] = useState([]);
  const urlToGet = approve ? selectedModel + "/toapprove" : selectedModel;
  const urlToPost = approve ? selectedModel + "/approve" : null;
  const { get } = useGetRequest(urlToGet);
  const { post } = usePostRequest(urlToPost);

  const handleList = (id) => {
    setListToUpdate([...listToUpdate, id]);
  };

  const handleUpdate = async () => {
    console.log(listToUpdate);
    const newData = data.filter((e) => !listToUpdate.includes(e.id));
    console.log(newData);
    const res = await post({
      ids: listToUpdate,
    });
    console.log(res);
    if (res.status === 200) {
      setStatusResponse({
        status: "success",
        message: "Conteúdos aprovados",
      });
    } else {
      setStatusResponse({
        status: "danger",
        message: "Erro ao aprovar conteúdo",
      });
    }
    setListToUpdate([]);
    setData(newData);
    setTimeout(() => {
      setStatusResponse({});
    }, 1000);
    // Adicionar conteúdos aprovados a lista de conteúdos
  };

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await get();
        console.log(response);

        setData(response.data);
        setKeys(Object.keys(response.data[0]));
        console.log(keys);
      } catch (error) {
        console.log(error);
        setData(null);
      }
    };
    getAllData();
  }, [get]);

  const Table = () => {
    return (
      <>
        {statusResponse.status && (
          <Alert variant={statusResponse.status}>
            {statusResponse.message}
          </Alert>
        )}
        {approve && <MDBBtn onClick={handleUpdate}>Aprovar</MDBBtn>}
        <MDBTable
          className="table-wrapper-scroll-y my-custom-scrollbar"
          align="middle"
        >
          <TableHead keys={keys} approve={approve} />
          <TableBody
            data={data}
            keys={keys}
            approve={approve}
            handleList={handleList}
          />
        </MDBTable>
      </>
    );
  };

  const NoData = () => {
    return (
      <div>
        <p>
          Não existem dados para serem {`${approve ? "aprovados" : "editados"}`}
        </p>
      </div>
    );
  };

  return <>{data && data.length > 0 ? <Table /> : <NoData />}</>;
}
