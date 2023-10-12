import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import report from '../../assets/Report.png'
import profile from '../../assets/Female Profile.png'
import { Table, Button } from "semantic-ui-react";
//import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar/Navbar";
import ModalUser from "../../components/ModalUser";
import './Reportes.css'
import CreateReportes from "./CreateReportes";


const token = localStorage.getItem("token")
const config = {
  headers: {
    token: token
  },
}



export default function ReadReportes() {

  //modalPost
  const [showModalPost, setShowModal] = useState(false);
  const handleClosePost = () => setShowModal(false);
  const handleShowPost = () => setShowModal(true);

  //estilo rueda
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const checkboxStyles = {
    backgroundColor: isChecked ? 'green' : 'red',
    border: `2px solid ${isChecked ? 'green' : 'red'}`,
  };

  //mostrar boton eliminar
  const [botonDelete, setBotonDelete] = useState(false);

  //bootstrap para perfil
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //data de la api
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8020/reportes/all", config)
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
      indicador_reportado,
      titulo_reporte,
      fecha_reporte,
      resultado_indicador,
      motivo_reporte,
      recomendacion,
    } = data;

    localStorage.setItem("id", _id);
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("indicador_reportado", indicador_reportado);
    localStorage.setItem("titulo_reporte", titulo_reporte);
    localStorage.setItem("fecha_reporte", fecha_reporte);
    localStorage.setItem("resultado_indicador", resultado_indicador);
    localStorage.setItem("motivo_reporte", motivo_reporte);
    localStorage.setItem("recomendacion", recomendacion);
  };

  const getData = () => {
    axios.get("http://localhost:8020/reportes/all", config)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios.delete(`http://localhost:8020/reportes/delete/${id}`, config)
      .then(() => {
        getData();
      });
  };
  return (
    <div>
      <Navbar handleShow={handleShow} botonDelete={botonDelete} setBotonDelete={setBotonDelete} handleShowPost={handleShowPost} />


      <div className='container-main'>
        <div className="informacion">
          <div className="title">
            <h3> <img src={report} width={30} alt='Imagen de add' style={{ marginRight: '20px' }} /> 
            <h2> Reportes del sistema </h2>  </h3>
              {showModalPost && <CreateReportes show={showModalPost} handleClosePost={handleClosePost} />} 
          </div>
          <div className="description">
            <h5> Información detallada sobre los reportes del sistema. En esta sección encontrarás reportes del sistema web, reportes de indicadores y/o desaprobar una gestión.  </h5>
          </div>

        </div>

        <div className="reports">
          <h2> Reportes registrados: </h2>
        </div>

        <div className="contenedor">
          <Row xs={1} md={2} className="g-4">

            {APIData.map(element => {
              console.log(element.detallesIndicador[0].indicador);
              return (
                <Col xs={12} className="mb-5 col">
                  <Card className="bg-light custom-card">
                    <Card.Body>
                      <Card.Text style={{ fontSize: '12px', marginTop: '30px' }}>
                        <img src={element.detallesUsuario[0].imagen || profile} style={{ marginLeft: 20 }} width={50} alt='ACÁ VA LA IMAGEN DEL SESION DE USUARIO ' />
                        <b> {element.detallesUsuario[0].nombre} </b>
                        <h6 style={{ marginLeft: 73 }}> Indicador: {element.detallesIndicador[0].indicador}</h6>
                        <h6 style={{ marginLeft: 73 }}> <b> Titulo: </b> {element.titulo_reporte} </h6>
                        <h6 style={{ marginLeft: 73 }}> <b> Descripción: </b>
                          <br />
                          <h6 id="description">
                            {element.resultado_indicador}
                          </h6>
                        </h6>

                        {botonDelete ? (
                           <div onClick={() => onDelete(element._id)}>
                           <i class="fa fa-lg fa-times-circle" aria-hidden="true" style={{color: 'red'}}></i>
                           </div>
                        ): null}

                      </Card.Text>
                      <div className="row">
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}



          </Row>
        </div>
      </div>


      {/* modal de usuario */}
      <ModalUser handleClose={handleClose} show={show} />

    </div>
  );
}