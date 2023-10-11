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

const UpdateAyudas = ({ show, handleClose }) => {
    let history = useNavigate();
    const [id, set_id] = useState("");
    const [usuario, set_usuario] = useState("");
    const [indicador_de_ayuda, set_indicador_de_ayuda] = useState("");
    const [titulo_ayuda, set_titulo_ayuda] = useState("");
    const [fecha_ayuda, set_fecha_ayuda] = useState("");
    const [area_asignada, set_area_asignada] = useState("");
    const [prioridad, set_prioridad] = useState("");
    const [motivo_ayuda, set_motivo_ayuda] = useState("");
    const [estado, set_estado] = useState("");
  
  
    const [allUsuarios, setAllUsuarios] = useState([]);
    const [allIndicadores, setAllIndicadores] = useState([]);
  
    useEffect(() => {
  
      const fetchData = async () => {
        try {
          const allUsers = await axios.get("http://localhost:8020/usuarios/all", config);
          const allIndicadores = await axios.get("http://localhost:8020/indicadores/all", config);
          setAllIndicadores(allIndicadores.data);
          setAllUsuarios(allUsers.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
  
      set_id(localStorage.getItem("id"));
      set_usuario(localStorage.getItem("usuario"));
      set_indicador_de_ayuda(localStorage.getItem("indicador_de_ayuda"));
      set_titulo_ayuda(localStorage.getItem("titulo_ayuda"));
      set_fecha_ayuda(localStorage.getItem("fecha_ayuda"));
      set_area_asignada(localStorage.getItem("area_asignada"));
      set_prioridad(localStorage.getItem("prioridad"));
      set_motivo_ayuda(localStorage.getItem("motivo_ayuda"));
      set_estado(localStorage.getItem("estado"));
  
  
    }, [])
  
  
    const updateApiData = () => {
      axios.put(`http://localhost:8020/ayudas/put/${id}`, {
        usuario,
        indicador_de_ayuda,
        titulo_ayuda,
        fecha_ayuda,
        area_asignada,
        prioridad,
        motivo_ayuda,
        estado
      }, config).then(() => {
        history("/ayudas");
      })
    }
    
    return (
        <div>
        <Modal show={show} onHide={handleClose} className="custom-modal">

            <Modal.Header className='basd'>
                <Modal.Title>¡Agrega una nuevo alimento!</Modal.Title>
            </Modal.Header>
            <Modal.Body className='a'>
                <label> seleccione usuario </label>
                <select name="usuarios" onClick={(e) => set_usuario(e.target.value)}>
                    <option> seleccione usuario nuevo</option>
                    {allUsuarios.map((data, i) => {
                        return (
                            <option key={i} value={data._id}> {data.nombre} </option>
                        )
                    })}
                </select>

                <label> seleccione indicador </label>
                <select name="indicador" onClick={(e) => set_indicador_de_ayuda(e.target.value)}>
                    <option> seleccione indicador</option>
                    {allIndicadores.map((data, i) => {
                        return (
                            <option key={i} value={data._id} > {data.indicador}  </option>
                        )
                    })}
                </select>

                <label>titulo ayuda</label>
                <input
                    type='text'
                    placeholder="titulo ayuda"
                    value={titulo_ayuda}
                    onChange={(e) => set_titulo_ayuda(e.target.value)}
                ></input>

                <label>fecha ayuda</label>
                <input
                    type='text'
                    placeholder="fecha ayuda"
                    value={fecha_ayuda}
                    onChange={(e) => set_fecha_ayuda(e.target.value)}
                ></input>

                <label>area asignada</label>
                <input
                    type='text'
                    placeholder="resultado indicador"
                    value={area_asignada}
                    onChange={(e) => set_area_asignada(e.target.value)}
                ></input>

                <label>prioridad</label>
                <input
                    type='text'
                    placeholder="prioridad"
                    value={prioridad}
                    onChange={(e) => set_prioridad(e.target.value)}
                ></input>

                <label>motivo ayuda</label>
                <input
                    type='text'
                    placeholder="motivo_ayuda"
                    value={motivo_ayuda}
                    onChange={(e) => set_motivo_ayuda(e.target.value)}
                ></input>

                <label>estado</label>
                <input
                    type='text'
                    placeholder="estado"
                    value={estado}
                    onChange={(e) => set_estado(e.target.value)}
                ></input>
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
    )
  }
  
  
  export default UpdateAyudas