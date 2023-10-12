import axios from "axios";
import React, { useEffect, useState } from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

//assets
import logo from "../../assets/logo.png";
import green from "../../assets/Circled Notch-Green.png";

import 'font-awesome/css/font-awesome.min.css'

//componentes
import Navbar from "../../components/NavBar/Navbar";
import ModalUser from "../../components/ModalUser";

//estilos
import "./Indicadores.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router";
import CreateIndicador from "./CreateIndicador";

//rutas (deprecated jijiji)
//import UpdateIndicador from "./UpdateIndicador";
//import CreateIndicador from "./CreateIndicador";

//tomar token y config para el header
const token = localStorage.getItem("token");
const config = {
  headers: {
    token: token,
  },
};

export default function ReadIndicadores() {
  //useState

  //MODALPOST
  const [showModalPost, setShowModalPost] = useState(false);
  const handleShowPost = () => setShowModalPost(true);
  const handleClosePost = () => setShowModalPost(false);

  //mostrar boton eliminar
  const [botonDelete, setBotonDelete] = useState(false);

  //bootstrap para perfil
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //data de la api
  const [APIData, setAPIData] = useState([]);

  //useNavigate
  const history = useNavigate();

  useEffect(() => {

    //token
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        token: token,
      },
    };

    //si no hay token
    if (!token) {
      history("/");
    }


    axios
      .get("http://localhost:8020/indicadores/all", config)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      })
      .catch((err) => {
        history("/")
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

      <div className="container-main">

        <Navbar handleShow={handleShow}

          botonDelete={botonDelete}
          setBotonDelete={setBotonDelete}

          handleShowPost={handleShowPost}
          //handleClosePost={handleClosePost}
        />

        <div className='container-main'>
          <img src={logo} alt='logo' width={30} style={{ marginTop: 30 }}></img>
          <h3> Panel de indicadores </h3>
          <h5>
            Aqui puedes visualizar los indicadores propuestos y añadidos por tu
            equipo de trabajo, Si quieres ver más detalles, dale click a uno de
            ellos para más información.
          </h5>
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
                {botonDelete ? <th>Eliminar</th> : null}
              </tr>
            </thead>
            <tbody>
              {APIData.map((data) => {
                return (
                  <tr className="render">
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
                        <b>

                          <CircularProgress
                            value={data.cumplimiento}
                            color={
                              data.cumplimiento > 0 && data.cumplimiento < 50
                                ? "red"
                                : data.cumplimiento >= 50 &&
                                  data.cumplimiento < 80
                                  ? "orange"
                                  : data.cumplimiento >= 80
                                    ? "green"
                                    : ""
                            }
                          >
                            <CircularProgressLabel>{data.cumplimiento}%</CircularProgressLabel>
                          </CircularProgress>

                        </b>
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
                          <div onClick={() => onDelete(data._id)}>
                          <i class="fa fa-lg fa-times-circle" aria-hidden="true" style={{color: 'red'}}></i>
                          </div>
                        </td>
                      ) : null}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <button className="botonsito"> ¿A dónde quieres ir? </button>

        {/* modal de usuario */}
        <ModalUser handleClose={handleClose} show={show} />


        {/**create indicador */}
        <CreateIndicador show={showModalPost} handleClosePost={handleClosePost} />

      </div>

    </div>
  );
}
