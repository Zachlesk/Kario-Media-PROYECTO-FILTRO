import logo from '../../assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import add from '../../assets/Add.png'
import reload from '../../assets/Reload.png'
import deletet from '../../assets/Remove.png'
import report from '../../assets/Report.png'
import help from '../../assets/Help.png'
import profile from '../../assets/Female Profile.png'
import 'font-awesome/css/font-awesome.min.css'

import './Navbar.css'

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Navbar({handleShow,botonDelete,setBotonDelete, handleShowPost}) {


  const [userInfo, setUserInfo] = useState(profile)

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

      fetchUserData();
    
  }, []);



    return(
      <div> 
      <nav className="navbar navbar-expand-lg">
      <div className='info'>

      <h5 className="mr-auto" onClick={() => handleShowPost()}>
      <Link to="">
      <img src={add} width={30} alt='Imagen de add'/> Añadir
      </Link>
      </h5>

      <h5 className="mr-auto" onClick={()=> window.location.reload(true)}>
      <Link to="">
      <img src={reload} width={16} alt='Imagen de add'/> Refrescar
      </Link>
      </h5>

      <h5 className="mr-auto" onClick={() => setBotonDelete(!botonDelete)}>
      <Link to=''>
      <img src={deletet} width={18} alt='Imagen de add'/> Eliminar
      </Link>
      </h5>

      <div className='mr-auto'>
        <Link to="/indicadores" className="navbar-brand">
        <img src={logo} alt="Mariposa" className="mariposa" width="26" />
      </Link>
      </div>
      
      <h5 className="mr-auto">
      <Link to="/reportes">
      <img src={report} width={16} alt='Imagen de add'/>   Reportar
      </Link>
      </h5>

      <h5 className="mr-auto">
      <Link to='/ayudas'>
      <img src={help} width={30} alt='Imagen de add'/>   Ayuda
      </Link>
      </h5>

      <h5 className="mr-auto" id='settings'>
      <Link to=''>
      <i className="fa fa-cog" aria-hidden="true"></i> </Link>
      <Link to=''>
      <i className="fa fa-bell" aria-hidden="true" style={{marginLeft: 20}}></i> </Link>
      <Link to=''>
      <img onClick={()=> handleShow()} src={userInfo.imagen} style={{marginLeft: 20, borderRadius: 30}} width={50} alt='ACÁ VA LA IMAGEN DEL SESION DE USUARIO '/> 
      </Link>
      </h5>

      </div>
    </nav>

    
    </div>
    )
}