import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import "./Reportes.css"



const token = localStorage.getItem("token")
const config = {
  headers: {
    token: token
  },
}


const CreateReportes = ({ show, handleClosePost }) => {

  let history = useNavigate()

  const [usuario, set_usuario] = useState("");
  const [indicador_reportado, set_indicador_reportado] = useState("");
  const [titulo_reporte, set_titulo_reporte] = useState("");
  const [fecha_reporte, set_fecha_reporte] = useState("");
  const [resultado_indicador, set_resultado_indicador] = useState("");
  const [motivo_reporte, set_motivo_reporte] = useState("");
  const [recomendacion, set_recomendacion] = useState("");


  const [allUsuarios, setAllUsuarios] = useState([]);
  const [allIndicadores, setAllIndicadores] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {


        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace("-", "+").replace("_", "/");
        const userData = JSON.parse(window.atob(base64));

        const response = await axios.get(
          `http://localhost:8020/usuarios/one/${userData.uid}`,
          config
        );

        console.log(response.data);
        set_usuario(response.data._id);

        const allIndicadores = await axios.get("http://localhost:8020/indicadores/all", config);
        setAllIndicadores(allIndicadores.data);
      } catch (error) {
        console.error(error);
      }

      const allUsers = await axios.get("http://localhost:8020/usuarios/all", config);
      setAllUsuarios(allUsers.data);
    };
      

    fetchData();
  }, [])


  const postData = () => {
    axios
      .post(`http://localhost:8020/reportes/post`, {
        usuario,
        indicador_reportado,
        titulo_reporte,
        fecha_reporte,
        resultado_indicador,
        motivo_reporte,
        recomendacion,
      }, config)
      .then(() => {
        history("/reportes")
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <Modal show={show} onHide={handleClosePost} className="custom-modal">

          <Modal.Header className='b'>
            <Modal.Title>¡Agrega un nuevo Reporte!</Modal.Title>
          </Modal.Header>
          <Modal.Body className='a'>
            <div>
              <label> seleccione usuario </label>
              <select name="usuarios" onClick={(e) => set_usuario(e.target.value)}>
                <option> seleccione usuario nuevo</option>
                {allUsuarios.map((data, i) => {
                  return (
                    <option key={i} value={data._id}> {data.nombre} </option>
                  )
                })}
              </select>
            </div>

            <div>
              <label> seleccione indicador </label>
              <select name="indicador" onClick={(e) => set_indicador_reportado(e.target.value)}>
                <option> seleccione indicador</option>
                {allIndicadores.map((data, i) => {
                  return (
                    <option key={i} value={data._id} > {data.indicador}  </option>
                  )
                })}
              </select>
            </div>

            <div>
              <label>titulo reporte</label>
              <input
                placeholder="titulo reporte"
                value={titulo_reporte}
                onChange={(e) => set_titulo_reporte(e.target.value)}
              ></input>
            </div>

            <div>
              <label>fecha reporte</label>
              <input
                placeholder="fecha reporte"
                value={fecha_reporte}
                onChange={(e) => set_fecha_reporte(e.target.value)}
              ></input>
            </div>

            <div>
              <label>resultado indicador</label>
              <input
                placeholder="resultado indicador"
                value={resultado_indicador}
                onChange={(e) => set_resultado_indicador(e.target.value)}
              ></input>
            </div>

            <div>
              <label>motivo reporte</label>
              <input
                placeholder="motivo reporte"
                value={motivo_reporte}
                onChange={(e) => set_motivo_reporte(e.target.value)}
              ></input>
            </div>

            <div>
              <label>recomendacion</label>
              <input
                placeholder="recomendacion"
                value={recomendacion}
                onChange={(e) => set_recomendacion(e.target.value)}
              ></input>
            </div>

          </Modal.Body>
          <Modal.Footer>
            <div className="text-center ">
              Designed by: Zachlesk
              <a href="https://github.com/Zachlesk" className="text-white me-2 custom-icon" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github fa-2x"></i>
              </a>
            </div>
            <Button type="submit" onClick={postData}>
              Agrega
            </Button>
            <Button type="submit" variant="secondary" onClick={handleClosePost}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>

  );
};

export default CreateReportes;
