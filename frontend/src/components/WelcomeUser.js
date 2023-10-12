import React, { useEffect, useState } from 'react';
import './styles/WelcomeUser.css';
import logo from '../assets/logo.png'
import axios from "axios";




const WelcomeUserComponent = () => {

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        token: token,
      },
    };

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

    fetchUserData();
  }, []);

  const getRoleText = () => {
    if (userInfo.rol === 'ADMIN') {
      return 'Usuario Administrador';
    } else {
      return 'Usuario';
    }
  };

  return (
    <div className="login">
      <div className="container-total">
        <div className="container-logo">
          <img src={logo} alt="Logo de KarioMedia" width={70} />
          <h3> M E D I A</h3>
        </div>
        <div className="container-informacion">
          <h1>
            Bienvenido de nuevo

          </h1>
          <h4>
            <br /> <img src={userInfo.imagen} alt='imagen-usuario' width={100} style={{ borderRadius: 60 }}></img>
          </h4>
          <h2> {userInfo.nombre} </h2>
          <h6>
            {getRoleText()}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default WelcomeUserComponent;
