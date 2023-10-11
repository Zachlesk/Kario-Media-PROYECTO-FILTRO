import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import { useNavigate } from 'react-router'


const token = localStorage.getItem("token")
const config = {
  headers: {
    token: token
  },
}


const UpdateIndicador = ({ show, handleClose }) => {
  let history = useNavigate()
  const [id, set_id] = useState("");
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
        setAllUsuarios(allUsers.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    set_id(localStorage.getItem("id"))
    set_indicador(localStorage.getItem("indicador"))
    set_descripcion(localStorage.getItem("descripcion"))
    set_usuario(localStorage.getItem("usuario"))
    set_categoria(localStorage.getItem("categoria"))
    set_fecha_de_inicio(localStorage.getItem("fecha_de_inicio"))
    set_fecha_de_terminacion(localStorage.getItem("fecha_de_terminacion"))
    set_formula(localStorage.getItem("formula"))
    set_frecuencia(localStorage.getItem("frecuencia"))
    set_cumplimiento(localStorage.getItem("cumplimiento"))
    set_area(localStorage.getItem("area"))



  }, [])


  const updateApiData = () => {
    axios.put(`http://localhost:8020/indicadores/put/${id}`, {
      indicador,
      descripcion,
      usuario,
      categoria,
      fecha_de_inicio,
      fecha_de_terminacion,
      formula,
      frecuencia,
      cumplimiento,
      area
    }, config).then(() => {
      history("/indicadores")
    })
  }

  return (
    <>
      <div>
        <Modal show={show} onHide={handleClose} className="custom-modal">

          <Modal.Header className='basd'>
            <Modal.Title>¡Agrega una nuevo alimento!</Modal.Title>
          </Modal.Header>
          <Modal.Body className='a'>
            <div>
              <input
                placeholder="indicador"
                value={indicador}
                onChange={(e) => set_indicador(e.target.value)}
              ></input>
            </div>
            <div>
              <label>descripcion</label>
              <input
                placeholder="descripcion"
                value={descripcion}
                onChange={(e) => set_descripcion(e.target.value)}
              ></input>
            </div>
            <div>
              <label> seleccione usuario </label>
              <select name="usuarios">
                <option> seleccione usuario nuevo</option>
                {allUsuarios.map((data, i) => {
                  return (
                    <option key={i} value={data._id} onClick={(e) => set_usuario(e.target.value)}> {data.nombre} </option>
                  )
                })}
              </select>
            </div>
            <div>
              <label>categoria</label>
              <input
                placeholder="categoria"
                value={categoria}
                onChange={(e) => set_categoria(e.target.value)}
              ></input>
            </div>
            <div>
              <label>fecha de inicio</label>
              <input
                placeholder="fecha de inicio"
                value={fecha_de_inicio}
                onChange={(e) => set_fecha_de_inicio(e.target.value)}
              ></input>
            </div>
            <div>
              <label>fecha de terminacion</label>
              <input
                placeholder="fecha de terminacion"
                value={fecha_de_terminacion}
                onChange={(e) => set_fecha_de_terminacion(e.target.value)}
              ></input>
            </div>
            <div>
              <label>formula</label>
              <input
                placeholder="formula"
                value={formula}
                onChange={(e) => set_formula(e.target.value)}
              ></input>
            </div>
            <div>
              <label>frecuencia</label>
              <input
                placeholder="frecuencia"
                value={frecuencia}
                onChange={(e) => set_frecuencia(e.target.value)}
              ></input>
            </div>
            <div>
              <label>cumplimiento</label>
              <input
                placeholder="cumplimiento"
                value={cumplimiento}
                onChange={(e) => set_cumplimiento(e.target.value)}
              ></input>
            </div>
            <div>
              <label>area</label>
              <input
                placeholder="area"
                value={area}
                onChange={(e) => set_area(e.target.value)}
              ></input>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" onClick={updateApiData}>
              Agrega
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>

  )
}


export default UpdateIndicador