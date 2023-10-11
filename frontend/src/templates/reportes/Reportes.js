import { Card, Col, Row } from "react-bootstrap";
//import Navbar from '../navbar/Navbar';
import './styles/Reportes.css'
import report from '../../assets/Report.png'
import profile from '../../assets/Female Profile.png'
import React, { useState } from 'react';

import 'font-awesome/css/font-awesome.min.css'

export default function Reportao() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const checkboxStyles = {
    backgroundColor: isChecked ? 'green' : 'red',
    border: `2px solid ${isChecked ? 'green' : 'red'}`,
  };


  return (
    <div>

      <div className='container-main'>
        <div className="informacion">
          <div className="title">
            <h3> <img src={report} width={30} alt='Imagen de add' style={{ marginRight: '20px' }} />  Reportes del sistema </h3>
            <button className='botonsito'> Añadir reporte </button>
          </div>
          <div className="description">
            <h5> Información detallada sobre los reportes del sistema. En esta sección encontrarás reportes del sistema web, reportes de indicadores y/o desaprobar una gestión.  </h5>
          </div>

        </div>

        <div className="reports">
          <h3> Reportes registrados </h3>
        </div>

        <div className="contenedor">
          <Row xs={1} md={2} className="g-4">

            <Col xs={12} className="mb-5 col">
              <Card className="bg-light custom-card">
                <Card.Body>
                  <Card.Text style={{ fontSize: '12px', marginTop: '30px' }}>
                    <img src={profile} style={{ marginLeft: 20 }} width={50} alt='ACÁ VA LA IMAGEN DEL SESION DE USUARIO ' />
                    <b> Diego Fernando Aceros Villalba </b>
                    <h6 style={{ marginLeft: 73 }}> Indicador: Modelado 3D </h6>
                    <h6 style={{ marginLeft: 73 }}> <b> Titulo: </b> Demoras en modelado 3D </h6>
                    <h6 style={{ marginLeft: 73 }}> <b> Descripción: </b>
                      <br />
                      <h6 id="description">
                        El modelado 3D de los proyectos está demorado y se espera completarlo dentro del plazo establecido.
                      </h6>
                    </h6>
                    {/* <label style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          style={checkboxStyles}
        />
        La casilla de verificación está {isChecked ? 'marcada' : 'desmarcada'}.
      </label> */}
                  </Card.Text>
                  <div className="row">
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} className="mb-5 col">
              <Card className="bg-light custom-card">
                <Card.Body>
                  <Card.Text style={{ fontSize: '12px', marginTop: '30px' }}>
                    <img src={profile} style={{ marginLeft: 20 }} width={50} alt='ACÁ VA LA IMAGEN DEL SESION DE USUARIO ' />
                    <b> Diego Fernando Aceros Villalba </b>
                    <h6 style={{ marginLeft: 73 }}> Indicador: Modelado 3D </h6>
                    <h6 style={{ marginLeft: 73 }}> <b> Titulo: </b> Demoras en modelado 3D </h6>
                    <h6 style={{ marginLeft: 73 }}> <b> Descripción: </b>
                      <br />
                      <h6 id="description">
                        El modelado 3D de los proyectos está demorado y se espera completarlo dentro del plazo establecido.
                      </h6>
                    </h6>
                  </Card.Text>
                  <div className="row">
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} className="mb-5 col">
              <Card className="bg-light custom-card">
                <Card.Body>
                  <Card.Text style={{ fontSize: '12px', marginTop: '30px' }}>
                    <img src={profile} style={{ marginLeft: 20 }} width={50} alt='ACÁ VA LA IMAGEN DEL SESION DE USUARIO ' />
                    <b> Diego Fernando Aceros Villalba </b>
                    <h6 style={{ marginLeft: 73 }}> Indicador: Modelado 3D </h6>
                    <h6 style={{ marginLeft: 73 }}> <b> Titulo: </b> Demoras en modelado 3D </h6>
                    <h6 style={{ marginLeft: 73 }}> <b> Descripción: </b>
                      <br />
                      <h6 id="description">
                        El modelado 3D de los proyectos está demorado y se espera completarlo dentro del plazo establecido.
                      </h6>
                    </h6>
                  </Card.Text>
                  <div className="row">
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} className="mb-5 col">
              <Card className="bg-light custom-card">
                <Card.Body>
                  <Card.Text style={{ fontSize: '12px', marginTop: '30px' }}>
                    <img src={profile} style={{ marginLeft: 20 }} width={50} alt='ACÁ VA LA IMAGEN DEL SESION DE USUARIO ' />
                    <b> Diego Fernando Aceros Villalba </b>
                    <h6 style={{ marginLeft: 73 }}> Indicador: Modelado 3D </h6>
                    <h6 style={{ marginLeft: 73 }}> <b> Titulo: </b> Demoras en modelado 3D </h6>
                    <h6 style={{ marginLeft: 73 }}> <b> Descripción: </b>
                      <br />
                      <h6 id="description">
                        El modelado 3D de los proyectos está demorado y se espera completarlo dentro del plazo establecido.
                      </h6>
                    </h6>
                  </Card.Text>
                  <div className="row">
                  </div>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </div>
      </div>
    </div>
  );

};