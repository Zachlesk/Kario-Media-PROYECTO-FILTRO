import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import UpdateAyudas from "./UpdateAyudas";
import CreateAyudas from "./CreateAyudas.js";
import 'bootstrap/dist/css/bootstrap.min.css';

const token = localStorage.getItem("token")
const config = {
  headers: {
    token: token
  },
}

export default function ReadAyudas() {
  const [APIData, setAPIData] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [showModalPost, setShowModalPost] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleClosePost = () => setShowModalPost(false);
  const handleShowPost = () => setShowModalPost(true);

  useEffect(() => {
    axios.get("http://localhost:8020/ayudas/all", config)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    console.log(data);
    const {
      _id,
      usuario,
      indicador_de_ayuda,
      titulo_ayuda,
      fecha_ayuda,
      area_asignada,
      prioridad,
      motivo_ayuda,
      estado
    } = data;

    localStorage.setItem("id", _id);
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("indicador_de_ayuda", indicador_de_ayuda);
    localStorage.setItem("titulo_ayuda", titulo_ayuda);
    localStorage.setItem("fecha_ayuda", fecha_ayuda);
    localStorage.setItem("area_asignada", area_asignada);
    localStorage.setItem("prioridad", prioridad);
    localStorage.setItem("motivo_ayuda", motivo_ayuda);
    localStorage.setItem("estado", estado);
  };

  const getData = () => {
    axios.get("http://localhost:8020/ayudas/all", config)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios.delete(`http://localhost:8020/ayudas/delete/${id}`, config)
      .then(() => {
        getData();
      });
  };

  return (
    <div>
      <Button className="btn btn-warning btn-round add" onClick={handleShowPost}>
        Crear
      </Button>
      {showModalPost && <CreateAyudas show={showModalPost} handleClosePost={handleClosePost} />}
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Usuario</Table.HeaderCell>
            <Table.HeaderCell>Indicador Ayuda</Table.HeaderCell>
            <Table.HeaderCell>Titulo ayuda</Table.HeaderCell>
            <Table.HeaderCell>Fecha ayuda</Table.HeaderCell>
            <Table.HeaderCell>Area asignada</Table.HeaderCell>
            <Table.HeaderCell>Prioridad</Table.HeaderCell>
            <Table.HeaderCell>Motivo ayuda</Table.HeaderCell>
            <Table.HeaderCell>Estado</Table.HeaderCell>

            <Table.HeaderCell>Actualizar</Table.HeaderCell>
            <Table.HeaderCell>Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.detalleUsuario[0].nombre}</Table.Cell>
                <Table.Cell>{data.detallesIndicadores[0].indicador}</Table.Cell>
                <Table.Cell>{data.titulo_ayuda}</Table.Cell>
                <Table.Cell>{data.fecha_ayuda}</Table.Cell>
                <Table.Cell>{data.area_asignada}</Table.Cell>
                <Table.Cell>{data.prioridad}</Table.Cell>
                <Table.Cell>{data.motivo_ayuda}</Table.Cell>
                <Table.Cell>{data.estado}</Table.Cell>
                  <Table.Cell>
                    <Button
                      className="btn btn-warning"
                      onClick={() => { handleShow(); setData(data); }}
                    >
                      Editar
                    </Button>
                    {showModal && <UpdateAyudas show={showModal} handleClose={handleClose} />}
                  </Table.Cell>

                  <Table.Cell>
                    <Button onClick={() => onDelete(data._id)}>Eliminar</Button>
                  </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}