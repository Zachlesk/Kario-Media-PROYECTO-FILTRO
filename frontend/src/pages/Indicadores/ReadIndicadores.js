import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import BotonModal from "../../components/BotonModal";
import ModalUser from "../../components/ModalUser";

import logo from "../../assets/logo.png"
import green from '../../assets/Circled Notch-Green.png'
import Navbar from '../../components/NavBar/Navbar';
import "./Indicadores.css"

import UpdateIndicador from "./UpdateIndicador";
import CreateIndicador from "./CreateIndicador";
import 'bootstrap/dist/css/bootstrap.min.css';


const token = localStorage.getItem("token");
const config = {
  headers: {
    token: token,
  },
};

export default function ReadIndicadores() {

  const [botonDelete, setBotonDelete] = useState(false);

  //bootstrap para perfil
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showModal, setShowModal] = useState(false);
  const [showModalPost, setShowModalPost] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleClosePost = () => setShowModalPost(false);
  const handleShowPost = () => setShowModalPost(true);



  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8020/indicadores/all", config)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    console.log(data);
    const {
      _id,
      indicador,
      descripcion,
      usuario,
      categoria,
      fecha_de_inicio,
      fecha_de_terminacion,
      formula,
      frecuencia,
      cumplimiento,
      area,
    } = data;

    localStorage.setItem("id", _id);
    localStorage.setItem("indicador", indicador);
    localStorage.setItem("descripcion", descripcion);
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("categoria", categoria);
    localStorage.setItem("fecha_de_inicio", fecha_de_inicio);
    localStorage.setItem("fecha_de_terminacion", fecha_de_terminacion);
    localStorage.setItem("formula", formula);
    localStorage.setItem("frecuencia", frecuencia);
    localStorage.setItem("cumplimiento", cumplimiento);
    localStorage.setItem("area", area);
  };

  const getData = () => {
    axios
      .get("http://localhost:8020/indicadores/all", config)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:8020/indicadores/delete/${id}`, config)
      .then(() => {
        getData();
      });
  };
  return (
    <div>
      <Navbar handleShow={handleShow} botonDelete={botonDelete} setBotonDelete={setBotonDelete} />

      <div className="barra">
        <div>
          <Button className="btn btn-warning btn-round add" onClick={handleShowPost}>
            Crear
          </Button>
          {showModalPost && <CreateIndicador show={showModalPost} handleClosePost={handleClosePost} />}
        </div>

        <Button
          className="boton-barra"
          onClick={() => window.location.reload(true)}
        >
          Refrescar
        </Button>

        <div>
          <Button
            className="boton-barra"
            onClick={() => {
              if (botonDelete) {
                setBotonDelete(false);
              } else {
                setBotonDelete(true)
              }
            }}
          >
            borrar
          </Button>
        </div>

        <div>logo</div>

        <div>
          <Link to="/reportes">reportar</Link>
        </div>

        <div>ayuda</div>

        <div>
          <BotonModal handleShow={handleShow} />
        </div>

      </div>

      <div className='container-main'>
        <img src={logo} alt='logo' width={30} style={{ marginTop: 30 }}></img>
        <h3> Panel de indicadores </h3>
        <h5> Aqui puedes visualizar los indicadores propuestos y añadidos por tu equipo de trabajo, Si quieres ver más detalles, dale click a uno de ellos para más información. </h5>
      </div>

      <div className="table-container">
        <Table>
          <thead>
            <tr>
              <th> Indicador </th>
              <th> Descripcion </th>
              <th> Categoría </th>
              <th> Fecha de inicio </th>
              <th> Fecha de terminación </th>
              <th> Formula </th>
              <th> Frecuencia </th>
              <th> Cumplimiento </th>
              <th> Área </th>
              <th> Actualizar </th>
              {botonDelete ? (<th>Eliminar</th>) : null}
            </tr>
          </thead>
          <tbody>
            {APIData.map(data => {
              return (
                <tr className='render' >
                  <td>
                    <div className="text">
                      <b> {data.indicador} </b>
                    </div>
                  </td>
                  <td>
                    <div className="text">
                      <b> {data.descripcion} </b>
                    </div>
                  </td>
                  <td>
                    <div className="text">
                      <b> {data.categoria} </b>
                    </div>
                  </td>
                  <td>
                    <div className="text">
                      <b> {data.fecha_de_inicio} </b>
                    </div>
                  </td>
                  <td>
                    <div className="text">
                      <b> {data.fecha_de_terminacion} </b>
                    </div>
                  </td>
                  <td>
                    <div className="text">
                      <b> {data.formula} </b>
                    </div>
                  </td>
                  <td>
                    <div className="text">
                      <b> {data.frecuencia} </b>
                    </div>
                  </td>
                  <td>
                    <div className="text">
                      <b> <img src={green} alt='Cumplimiento' className='alt' width={40} /> </b>
                    </div>
                  </td>
                  <td>
                    <div className="text">
                      <b> {data.area} </b>
                    </div>
                  </td>
                  <td>
                    <div className="text">
                      <i class="fa fa-bars" aria-hidden="true"></i>
                    </div>
                  </td>
                  <td>
                    {botonDelete ? (
                      <td>
                        <div className="text" onClick={() => onDelete(data._id)}>
                          <b> delete </b>
                        </div>
                      </td>) : null}
                  </td>
                </tr>
              )
            })}

          </tbody>

          <Table.Body>

      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>indicador</Table.HeaderCell>
            <Table.HeaderCell>descripcion </Table.HeaderCell>
            <Table.HeaderCell>categoria</Table.HeaderCell>
            <Table.HeaderCell>fecha_de_inicio</Table.HeaderCell>
            <Table.HeaderCell>fecha_de_terminacion</Table.HeaderCell>
            <Table.HeaderCell>formula</Table.HeaderCell>
            <Table.HeaderCell>frecuencia</Table.HeaderCell>
            <Table.HeaderCell>cumplimiento</Table.HeaderCell>
            <Table.HeaderCell>area</Table.HeaderCell>

            <Table.HeaderCell>Actualizar</Table.HeaderCell>
            {botonDelete ? (<Table.HeaderCell>Eliminar</Table.HeaderCell>) : null}
          </Table.Row>
        </Table.Header>
        <Table.Body>

          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.indicador}</Table.Cell>
                <Table.Cell>{data.descripcion}</Table.Cell>
                <Table.Cell>{data.categoria}</Table.Cell>
                <Table.Cell>{data.fecha_de_inicio}</Table.Cell>
                <Table.Cell>{data.fecha_de_terminacion}</Table.Cell>
                <Table.Cell>{data.formula}</Table.Cell>
                <Table.Cell>{data.frecuencia}</Table.Cell>
                <Table.Cell>{data.cumplimiento}</Table.Cell>
                <Table.Cell>{data.area}</Table.Cell>
                <Table.Cell>
                  <Button
                    className="btn btn-warning"
                    onClick={() => { handleShowModal(); setData(data); }}
                  >
                    Editar
                  </Button>
                  {showModal && <UpdateIndicador show={showModal} handleClose={handleCloseModal} />}
                </Table.Cell>

                {botonDelete ? (<Table.Cell> <Button onClick={() => onDelete(data._id)}>Eliminar</Button> </Table.Cell>) : null}

              </Table.Row>
            );
          })}
        </Table.Body>
        </Table>
      </div>
      <button className='botonsito'> ¿A dónde quieres ir? </button>

      {/* modal de usuario */}
      <ModalUser handleClose={handleClose} show={show} />

    </div>
  );
}
