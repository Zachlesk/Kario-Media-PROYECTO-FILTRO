import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import help from '../../assets/Help.png';
import './CreateAyudas.css'

const token = localStorage.getItem("token")
const config = {
    headers: {
        token: token
    },
};

const CreateAyudas = ({ show, handleClosePost }) => {

    let history = useNavigate();

    const [usuario, set_usuario] = useState("");
    const [indicador_de_ayuda, set_indicador_de_ayuda] = useState("");
    const [titulo_ayuda, set_titulo_ayuda] = useState("");
    const [fecha_ayuda, set_fecha_ayuda] = useState("");
    const [area_asignada, set_area_asignada] = useState("");
    const [prioridad, set_prioridad] = useState("");
    const [motivo_ayuda, set_motivo_ayuda] = useState("");
    const [estado, set_estado] = useState("");

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
    
        };
          
    
        fetchData();
      }, [])
    
      const handleClick = () => {
        window.location.reload(true);
        postData(); 
      }

    const postData = () => {
        axios
            .post(`http://localhost:8020/ayudas/post`, {
                usuario,
                indicador_de_ayuda,
                titulo_ayuda,
                fecha_ayuda,
                area_asignada,
                prioridad,
                motivo_ayuda,
                estado
            }, config)
            .then(() => {
                history("/ayudas")
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
                    <img src={help} width={30} height={30} alt='Imagen de add' />
            <h1 style={{marginLeft: 30}}> Agregar nueva ayuda </h1>


                        <div className="ol">
                        <label> seleccione indicador </label>
                        <select name="indicador" onClick={(e) => set_indicador_de_ayuda(e.target.value)}>
                            <option> seleccione indicador</option>
                            {allIndicadores.map((data, i) => {
                                return (
                                    <option key={i} value={data._id} > {data.indicador}  </option>
                                )
                            })}
                        </select>
                        </div>


                        <div className="ol">
                        <label>Titulo de ayuda:</label>
                        <input
                            placeholder="Titulo de ayuda"
                            value={titulo_ayuda}
                            onChange={(e) => set_titulo_ayuda(e.target.value)}
                        ></input>
                        </div>

                        <div className="ol">
                        <label>Fecha de registro de ayuda:</label>
                        <input
                            type="date"
                            value={fecha_ayuda}
                            onChange={(e) => set_fecha_ayuda(e.target.value)}
                        ></input>
                        </div>

                        <div className="ol">
                        <label> Area asignada:</label>
                        <input
                            placeholder= "Area asignada a la gestión"
                            value={area_asignada}
                            onChange={(e) => set_area_asignada(e.target.value)}
                        ></input>
                        </div>

                        <div className="ol">
                        <label>Prioridad:</label>
                        <input
                            placeholder="Nivel de prioridad"
                            value={prioridad}
                            onChange={(e) => set_prioridad(e.target.value)}
                        ></input>
                        </div>

                        <div className="ol">
                        <label>Motivo de ayuda</label>
                        <input
                            placeholder="Motivo de la ayuda "
                            value={motivo_ayuda}
                            onChange={(e) => set_motivo_ayuda(e.target.value)}
                        ></input>
                        </div>

                        <div className="ol">
                        <label> Estado</label>
                        <input
                            placeholder="Estado de la ayuda"
                            value={estado}
                            onChange={(e) => set_estado(e.target.value)}
                        ></input>
                        </div>

<Button type="submit" onClick={handleClick}>
                            Agregar ayuda
                        </Button>
                    </Modal.Body>

                

                </Modal>
            </div>
        </>


    );
}

export default CreateAyudas;