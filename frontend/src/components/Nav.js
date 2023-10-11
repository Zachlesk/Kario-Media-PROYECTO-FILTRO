import logo from '../assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import add from '../assets/Add.png'
import reload from '../assets/Reload.png'
import deletet from '../assets/Remove.png'
import report from '../assets/Report.png'
import help from '../assets/Help.png'
import profile from '../assets/Female Profile.png'

import 'font-awesome/css/font-awesome.min.css'

import './styles/Navbar.css'

import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
      <div> 
      <nav className="navbar navbar-expand-lg">
      <div className='info'>

      <h5 className="mr-auto">
      <Link to="">
      <img src={add} width={30} alt='Imagen de add'/> Añadir
      </Link>
      </h5>
      <h5 className="mr-auto">
      <Link to="">
      <img src={reload} width={16} alt='Imagen de add'/> Refrescar
      </Link>
      </h5>
      <h5 className="mr-auto">
      <Link to=''>
      <img src={deletet} width={18} alt='Imagen de add'/> Eliminar
      </Link>
      </h5>
      <div className='mr-auto'>
        <Link to="/" className="navbar-brand">
        <img src={logo} alt="Mariposa" className="mariposa" width="26" />
      </Link>
      </div>
      
      <h5 className="mr-auto">
      <Link to="">
      <img src={report} width={16} alt='Imagen de add'/>   Reportar
      </Link>
      </h5>
      <h5 className="mr-auto">
      <Link to=''>
      <img src={help} width={30} alt='Imagen de add'/>   Ayuda
      </Link>
      </h5>
      <h5 className="mr-auto" id='settings'>
      <Link to=''>
      <i className="fa fa-cog" aria-hidden="true"></i> </Link>
      <Link to=''>
      <i className="fa fa-bell" aria-hidden="true" style={{marginLeft: 20}}></i> </Link>
      <Link to=''>
      <img src={profile} style={{marginLeft: 20}} width={50} alt='ACÁ VA LA IMAGEN DEL SESION DE USUARIO '/> 
      </Link>
      </h5>
      </div>
    </nav>
    </div>
    )
}