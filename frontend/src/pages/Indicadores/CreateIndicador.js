import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import add from '../../assets/Add.png';
import './CreateIndicador.css'

const token = localStorage.getItem("token");
const config = {
  headers: {
    token: token,
  },
};

const CreateIndicador = ({ show, handleClosePost }) => {
  let history = useNavigate();

  const [indicador, set_indicador] = useState("");
  const [descripcion, set_descripcion] = useState("");
  const [usuario, set_usuario] = useState("");
  const [categoria, set_categoria] = useState("");
  const [fecha_de_inicio, set_fecha_de_inicio] = useState("");
  const [fecha_de_terminacion, set_fecha_de_terminacion] = useState("");
  const [formula, set_formula] = useState("");
  const [frecuencia, set_frecuencia] = useState("");
  const [cumplimiento, set_cumplimiento] = useState("");
  const [area, set_area] = useState("");

  const [allUsuarios, setAllUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allUsers = await axios.get("http://localhost:8020/usuarios/all", config);
        if (Array.isArray(allUsers.data)) {
          setAllUsuarios(allUsers.data);
        } else {
          console.error("La respuesta de la API no es un array:", allUsers.data);
        }
      } catch (error) {
        console.error("Error al obtener datos de usuario:", error);
      }
    };
  
    fetchData();
  }, []);
  

  const postData = () => {
    axios
      .post(
        `http://localhost:8020/indicadores/post`,
        {
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
        },
        config
      )
      .then(() => {
        history("/indicadores");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = () => {
    window.location.reload(true);
    postData(); 
  }

  return (
    <>
      <div>
        <Modal show={show} onHide={handleClosePost} className="custom-modal ">
          <Modal.Body className="a">
          <img src={add} width={30} height={30} alt='Imagen de add' />
            <h1 style={{marginLeft: 30}}> Agregar nuevo indicador </h1>
            <div className="ol">
              <label> Titulo del reporte:   </label>
              <input
                placeholder="Nombre de indicador"
                value={indicador}
                onChange={(e) => set_indicador(e.target.value)}
              ></input>
            </div>

            <div className="ol">
              <label>Descripción:</label>
              <input
                placeholder="Descripción de indicador"
                value={descripcion}
                onChange={(e) => set_descripcion(e.target.value)}
              ></input>
            </div>

            <div className="ol">
              <label> Seleccione usuario: </label>
              <select name="usuarios" onClick={(e) => set_usuario(e.target.value)}>
                <option> Usuarios </option>
                {allUsuarios.map((data, i) => {
                  return (
                    <option
                      key={i}
                      value={data._id}
                    >
                      {data.nombre}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="ol">
              <label>Categoria:</label>
              <input
                placeholder="Categoria de clasificación"
                value={categoria}
                onChange={(e) => set_categoria(e.target.value)}
              ></input>
            </div>

            <div className="ol">
              <label>Fecha de inicio:</label>

              <input
              type="date"
                value={fecha_de_inicio}
                onChange={(e) => set_fecha_de_inicio(e.target.value)}
              ></input>
            </div>

            <div className="ol">
              <label>Fecha de terminación:</label>
              <input
               type="date"
                placeholder="fecha de terminacion"
                value={fecha_de_terminacion}
                onChange={(e) => set_fecha_de_terminacion(e.target.value)}
              ></input>
            </div>

            <div className="ol">
              <label>Fórmula: </label>

              <input
                placeholder="Metodología de formula"
                value={formula}
                onChange={(e) => set_formula(e.target.value)}
              ></input>
            </div>

            <div className="ol">
              <label>Frecuencia:</label>

              <input
                placeholder="Frecuencia de cumplimiento"
                value={frecuencia}
                onChange={(e) => set_frecuencia(e.target.value)}
              ></input>
            </div>

            <div className="ol">
              <label>Cumplimiento</label>

              <input
                placeholder="Porcentaje de cumplimiento"
                type="number"
                value={cumplimiento}
                onChange={(e) => set_cumplimiento(e.target.value)}
              ></input>
            </div>

            <div className="ol">
              <label>Área:</label>

              <input
                placeholder="Área de desarrollo"
                value={area}
                onChange={(e) => set_area(e.target.value)}
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

export default CreateIndicador;
