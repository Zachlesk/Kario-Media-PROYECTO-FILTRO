import { Card, Col, Row } from "react-bootstrap";
//import Navbar from '../navbar/Navbar';
import './styles/Ayudas.css'
import help from '../../assets/Help.png'
import profile from '../../assets/Female Profile.png'
import React  from 'react';
import Navbar from "../../components/NavBar/Navbar";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'

export default function Ayuditas() {

 
    return ( 
        <div>
        <Navbar/>
        <div className="information">
            <h1> Ayudas del sistema </h1>
            <img src={help} width={40} alt='Imagen de ayuda'/> 
            <h4> Módulo para inquietudes, dudas, solicitudes y ayudantías para los indicadores o sobre el sistema.  </h4>
            <p> <button className='botonsano'> Añadir ayuda </button></p> 
        </div>
                    <div className="large-container">
                    <img src={profile} width={60} height={40} alt='ACÁ VA LA IMAGEN DEL SESION DE USUARIO '/> 
                        <p>  Diego Fernando Aceros Villalba  </p>
                        <p> <b> Falta de personal en maquetación </b>  </p>
                       <p> <button className='botonsano'> Detalles </button></p> 
                    </div>
                    <div className="large-container">
                    <img src={profile} width={60} height={40} alt='ACÁ VA LA IMAGEN DEL SESION DE USUARIO '/> 
                        <p>  Diego Fernando Aceros Villalba  </p>
                        <p> <b> Falta de personal en maquetación </b>  </p>
                       <p> <button className='botonsano'> Detalles </button></p> 
                    </div>
                    <div className="large-container">
                    <img src={profile} width={60} height={40} alt='ACÁ VA LA IMAGEN DEL SESION DE USUARIO '/> 
                        <p>  Diego Fernando Aceros Villalba  </p>
                        <p> <b> Falta de personal en maquetación </b>  </p>
                       <p> <button className='botonsano'> Detalles </button></p> 
                    </div>
                    <div className="large-container">
                    <img src={profile} width={60} height={40} alt='ACÁ VA LA IMAGEN DEL SESION DE USUARIO '/> 
                        <p>  Diego Fernando Aceros Villalba  </p>
                        <p> <b> Falta de personal en maquetación </b>  </p>
                       <p> <button className='botonsano'> Detalles </button></p> 
                    </div>
</div>
        )

};