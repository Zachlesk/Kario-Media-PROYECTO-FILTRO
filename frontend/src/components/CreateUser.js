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

const CreateUser = ({ show, handleClosePost }) => {

    let history = useNavigate();

    const [nombre, set_nombre] = useState("");
    const [email, set_email] = useState("");
    const [imagen, set_imagen] = useState("");
    const [telefono, set_telefono] = useState("");
    const [cargo, set_cargo] = useState("");
    const [password, set_password] = useState("");
    const [rol, set_rol] = useState("");
    const [fecha_registro, set_fecha_registro] = useState("");
    const [activo, set_activo] = useState(true);

    const postData = () => {
        axios
            .post(`http://localhost:8020/register/Register`, {
                nombre,
                email,
                imagen,
                telefono,
                cargo,
                password,
                rol,
                fecha_registro,
                activo
            }, config)
            .then(() => {
                window.location.reload();
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
                        <Modal.Title> ¡Agrega usuario! </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='a'>

                        <label>nombre</label>
                        <input
                            placeholder="nombre"
                            value={nombre}
                            onChange={(e) => set_nombre(e.target.value)}
                        ></input>

                        <label>email</label>
                        <input
                            placeholder="email"
                            value={email}
                            onChange={(e) => set_email(e.target.value)}
                        ></input>

                        <label>imagen</label>
                        <input
                            placeholder="resultado indicador"
                            value={imagen}
                            onChange={(e) => set_imagen(e.target.value)}
                        ></input>

                        <label>telefono</label>
                        <input
                            placeholder="telefono"
                            value={telefono}
                            onChange={(e) => set_telefono(e.target.value)}
                        ></input>

                        <label>cargo</label>
                        <input
                            placeholder="cargo"
                            value={cargo}
                            onChange={(e) => set_cargo(e.target.value)}
                        ></input>

                        <label>password</label>
                        <input
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => set_password(e.target.value)}
                        ></input>

                        <label>rol</label>
                        <select
                            value={rol}
                            onChange={(e) => set_rol(e.target.value)}>
                            <option value="">Seleccionar Rol</option>
                            <option value="ADMIN">ADMIN</option>
                            <option value="USER">USER</option>
                        </select>

                        <label>fecha_registro</label>
                        <input
                            type="date"
                            placeholder="fecha_registro"
                            value={fecha_registro}
                            onChange={(e) => set_fecha_registro(e.target.value)}
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
                            Agregar
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

export default CreateUser;