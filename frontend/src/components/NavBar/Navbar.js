import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import add from '../../assets/Add.png';
import reload from '../../assets/Reload.png';
import deletet from '../../assets/Remove.png';
import report from '../../assets/Report.png';
import help from '../../assets/Help.png';
import profile from '../../assets/Female Profile.png';
import 'font-awesome/css/font-awesome.min.css';
import './Navbar.css';

export default function Navbar({ handleShow, botonDelete, setBotonDelete, handleShowPost }) {
  const [userInfo, setUserInfo] = useState(profile);

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

        setUserInfo(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="info">
          <div className="mr-auto" onClick={() => handleShowPost()}>
            <img src={add} width={30} height={30} alt='Imagen de add' />
            <h5 style={{ marginLeft: 10 }}> Agregar </h5>
          </div>

          <div className="mr-auto" onClick={() => window.location.reload(true)}>
            <img src={reload} width={22} height={18} alt='Imagen de add' />
            <h5 style={{ marginLeft: 10 }}> Refrescar </h5>
          </div>

          <div className="mr-auto" onClick={() => setBotonDelete(!botonDelete)}>
            <img src={deletet} width={20} alt='Imagen de add' />
            <h5 style={{ marginLeft: 10 }}> Eliminar </h5>
          </div>

          <div className="mr-auto">
            <Link to="/indicadores" className="navbar-brand">
              <img src={logo} style={{ marginTop: -14 }} alt="Mariposa" className="mariposa" width="30" />
            </Link>
          </div>

          <a href='/reportes'>
            <div className="mr-auto">
              <img src={report} width={16} alt='Imagen de add' />
              <h5 style={{ marginLeft: 10 }}> Reportar </h5>
            </div>
          </a>

          <a href='/ayudas'>
            <h5 className="mr-auto">
              <img src={help} width={30} alt='Imagen de add' /> Ayuda
            </h5>
          </a>

          <h5 className="mr-auto" id='settings'>
            <Link to=''>
              <i className="fa fa-cog" aria-hidden="true"></i>
            </Link>
            <Link to=''>
              <i className="fa fa-bell" aria-hidden="true" style={{ marginLeft: 20 }}></i>
            </Link>
            <Link to=''>
              <img onClick={() => handleShow()} src={userInfo.imagen} style={{ marginLeft: 20, borderRadius: 30 }} width={50} alt='ACÁ VA LA IMAGEN DEL SESION DE USUARIO ' />
            </Link>
          </h5>
        </div>
      </nav>
    </div>
  );
}
