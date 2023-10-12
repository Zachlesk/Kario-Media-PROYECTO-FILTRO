import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import "./Reportes.css"
import report from '../../assets/Report.png';



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

  const handleClick = () => {
    window.location.reload(true);
    postData(); 
  }

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

          <Modal.Body className='a'>
          <img src={report} width={30} height={30} alt='Imagen de add' />
          <Modal.Title>¡Agrega un nuevo reporte!</Modal.Title>
               

            <div className="ol">
              <label> Seleccione indicador </label>
              <br/><select name="indicador" onClick={(e) => set_indicador_reportado(e.target.value)}>
                <option> Indicador </option>
                {allIndicadores.map((data, i) => {
                  return (
                    <option key={i} value={data._id} > {data.indicador}  </option>
                  )
                })}
              </select>
            </div>

            <div className="ol">
              <label>Titulo del reporte</label>
              <input
                placeholder="Titulo del reporte"
                value={titulo_reporte}
                onChange={(e) => set_titulo_reporte(e.target.value)}
              ></input>
            </div>

            <div className="ol">
              <label>Fecha de reporte</label>
              <input
              type="date"
                placeholder="fecha reporte"
                value={fecha_reporte}
                onChange={(e) => set_fecha_reporte(e.target.value)}
              ></input>
            </div>

            <div className="ol">
              <label>Resultado actual del indicador:</label>
              <input
                placeholder="Resultado de indicador"
                value={resultado_indicador}
                onChange={(e) => set_resultado_indicador(e.target.value)}
              ></input>
            </div>

            <div className="ol">
              <label>Motivo del reporte</label>
              <input
                placeholder="Motivo del reporte:"
                value={motivo_reporte}
                onChange={(e) => set_motivo_reporte(e.target.value)}
              ></input>
            </div>

            <div className="ol">
              <label>Recomendacion: </label>
              <input
                placeholder="Recomendacion para indicador"
                value={recomendacion}
                onChange={(e) => set_recomendacion(e.target.value)}
              ></input>
            </div>

            <Button type="submit" onClick={handleClick}>
              Agrega
            </Button>

          </Modal.Body>
        </Modal>
      </div>
    </>

  );
};

export default CreateReportes;