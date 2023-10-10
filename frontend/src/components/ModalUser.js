import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "semantic-ui-react";

const token = localStorage.getItem("token");
const config = {
  headers: {
    token: token,
  },
};

const ModalUser = ({ handleClose, show }) => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace("-", "+").replace("_", "/");
        const userData = JSON.parse(window.atob(base64));

        const response = await axios.get(
          `http://localhost:8020/usuarios/one/${userData.uid}`,
          config
        );

        console.log(response.data);
        setUserInfo(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (show) {
      fetchUserData();
    }
  }, [show]);

  return (
    <Modal show={show} onHide={handleClose} className="right-corner-modal">
      <Modal.Header closeButton>
        <Modal.Title>Perfil de Usuario</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {console.log(userInfo)}

        <img src={userInfo.imagen} alt="imagen" />
        <h2>{userInfo.nombre}</h2>
        <h6>{userInfo.cargo}</h6>

        <br />

        <p>Contacto</p>
        <p> {userInfo.email} </p>
        <p> {userInfo.telefono} </p>

        <br />

        <p>Fecha de Registro: {userInfo.fecha_registro} </p>

      </Modal.Body>


      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUser;
