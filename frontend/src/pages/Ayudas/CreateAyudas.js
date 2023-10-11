import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

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
    }, [])

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

                    <Modal.Header className='b'>
                        <Modal.Title> ¡Agrega una nuevo alimento! 🌸 </Modal.Title>
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
                            placeholder="titulo ayuda"
                            value={titulo_ayuda}
                            onChange={(e) => set_titulo_ayuda(e.target.value)}
                        ></input>

                        <label>fecha ayuda</label>
                        <input
                            placeholder="fecha ayuda"
                            value={fecha_ayuda}
                            onChange={(e) => set_fecha_ayuda(e.target.value)}
                        ></input>

                        <label>area asignada</label>
                        <input
                            placeholder="resultado indicador"
                            value={area_asignada}
                            onChange={(e) => set_area_asignada(e.target.value)}
                        ></input>

                        <label>prioridad</label>
                        <input
                            placeholder="prioridad"
                            value={prioridad}
                            onChange={(e) => set_prioridad(e.target.value)}
                        ></input>

                        <label>motivo ayuda</label>
                        <input
                            placeholder="motivo_ayuda"
                            value={motivo_ayuda}
                            onChange={(e) => set_motivo_ayuda(e.target.value)}
                        ></input>

                        <label>estado</label>
                        <input
                            placeholder="estado"
                            value={estado}
                            onChange={(e) => set_estado(e.target.value)}
                        ></input>

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
}

export default CreateAyudas;