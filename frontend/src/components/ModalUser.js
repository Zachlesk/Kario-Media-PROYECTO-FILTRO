import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import "./styles/ModalUser.css";
import CreateUser from "./CreateUser";

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

        const token = localStorage.getItem("token");
        const config = {
          headers: {
            token: token,
          },
        };

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

  const [showModalPost, setShowModalPost] = useState(false);
   const handleShowPost = () => setShowModalPost(true);
   const handleClosePost = () => setShowModalPost(false);

  return (
    <Modal show={show} onHide={handleClose} dialogClassName={`right-corner-modal ${show ? '' : 'slide-out-right'}`}>

      <Modal.Body>
        
        <img src={logo} alt="Mariposa" className="logo" width="40" style={{marginTop: 60}} />
        <br /> <h3 className="perfildeusuario"> Perfil de usuario </h3>


        <img src={userInfo.imagen} className="imagen" alt="imagen" width={140} style={{ borderRadius: 500 }} />
        <h2>{userInfo.nombre}</h2>
        <h4>{userInfo.cargo}</h4>

        <br />

        <p> <b> Contacto: </b></p>
        <h3> {userInfo.email} </h3>
        <h3> {userInfo.telefono} </h3>

        <br />

        <h3> <b> Fecha de Registro: </b> {userInfo.fecha_registro} </h3>

        <Link to="/" onClick={() => localStorage.removeItem("token")}>
          <i class="fa fa-2x fa-sign-out" style={{marginTop: 20, color: "#FF721B"}} aria-hidden="true"></i>
        </Link>

        {userInfo.rol == "ADMIN" ? (
          <div> 
          <h4 style={{marginTop: 30}}> <b> Panel administrador: </b></h4>
          <Button onClick={handleShowPost}>
            <p> <i class="fa fa-plus" aria-hidden="true"></i>  Añadir usuario </p>
            {showModalPost && <CreateUser show={showModalPost} handleClosePost={handleClosePost} />}
          </Button>
          </div>
        ) : null
        }
      </Modal.Body>
    </Modal>
  );
};

export default ModalUser;
