import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import UpdateAyudas from "./UpdateAyudas";
import CreateAyudas from "./CreateAyudas.js";

import help from "../../assets/Help.png";
import profile from "../../assets/Female Profile.png";
import Navbar from "../../components/NavBar/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Ayudas.css";
import ModalUser from "../../components/ModalUser";
import { useNavigate } from "react-router";

const token = localStorage.getItem("token");
const config = {
  headers: {
    token: token,
  },
};

export default function ReadAyudas() {
  const [APIData, setAPIData] = useState([]);

  //MODALPOST
  const [showModalPost, setShowModalPost] = useState(false);
  const handleShowPost = () => setShowModalPost(true);
  const handleClosePost = () => setShowModalPost(false);

  const [botonDelete, setBotonDelete] = useState(false);

  //bootstrap para perfil
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        token: token,
      },
    };

    //si no hay token
    if (!token) {
      history("/");
    }

    axios
      .get("http://localhost:8020/ayudas/all", config)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      })
      .catch(() => {
        history("/");
      });
  }, []);

  const setData = (data) => {
    console.log(data);
    const {
      _id,
      usuario,
      indicador_de_ayuda,
      titulo_ayuda,
      fecha_ayuda,
      area_asignada,
      prioridad,
      motivo_ayuda,
      estado,
    } = data;

    localStorage.setItem("id", _id);
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("indicador_de_ayuda", indicador_de_ayuda);
    localStorage.setItem("titulo_ayuda", titulo_ayuda);
    localStorage.setItem("fecha_ayuda", fecha_ayuda);
    localStorage.setItem("area_asignada", area_asignada);
    localStorage.setItem("prioridad", prioridad);
    localStorage.setItem("motivo_ayuda", motivo_ayuda);
    localStorage.setItem("estado", estado);
  };

  const getData = () => {
    axios.get("http://localhost:8020/ayudas/all", config).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:8020/ayudas/delete/${id}`, config)
      .then(() => {
        getData();
      });
  };

  return (
    <div>
      <Navbar
        handleShow={handleShow}
        botonDelete={botonDelete}
        setBotonDelete={setBotonDelete}
        handleShowPost={handleShowPost}
      />

      <div className="information">
        <h1> Ayudas del sistema </h1>
        <img src={help} width={40} alt="Imagen de ayuda" />
        <h4>
          {" "}
          Módulo para inquietudes, dudas, solicitudes y ayudantías para los
          indicadores o sobre el sistema.{" "}
        </h4>
        {/* <p> <button className='botonsano'> Añadir ayuda </button></p> */}
      </div>

      {APIData.map((data) => {
        return (
          <div className="large-container">
            <img
              src={data.detalleUsuario[0].imagen || profile}
              style={{ borderRadius: 30 }}
              width={60}
              height={40}
              alt="ACÁ VA LA IMAGEN DEL SESION DE USUARIO "
            />
            <p> {data.detalleUsuario[0].nombre} </p>
            <p>
              {" "}
              <b> {data.titulo_ayuda} </b>{" "}
            </p>

            {botonDelete ? (
              <td>
                <div onClick={() => onDelete(data._id)}>
                  <i
                    class="fa fa-lg fa-times-circle"
                    aria-hidden="true"
                    style={{ color: "red" }}
                  ></i>
                </div>
              </td>
            ) : null}
          </div>
        );
      })}

      {/* modal create */}
      <CreateAyudas show={showModalPost} handleClosePost={handleClosePost} />

      {/* modal de usuario */}
      <ModalUser handleClose={handleClose} show={show} />
    </div>
  );
}
