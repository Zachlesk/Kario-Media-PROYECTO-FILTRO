import './styles/Login.css'
import logo from '../../assets/logo.png'
import Button from 'react-bootstrap/Button';

export default function Login() {
    return (
        <div className='pagina-principal'>
            <div className='login'>
            <div className='container-total'> 
            <div className='container-logo'> 
                <img src={logo} alt='Logo de KarioMedia' width={70}></img>
                <h5> M E D I A</h5>
                </div>
            <div className='container-informacion'>
                <h2> Bienvenido al panel digital de 
                <br/> KARIO Media </h2>
                <h4> Por favor ingresa los siguientes datos para ingresar a la plataforma </h4>
                <label> Usuario </label>
                <br/><input type='text'></input>
                <br/><label> Contraseña </label>
                <br/> <input type='text'></input>
                <br/> 
                <Button type="submit" variant="secondary">
                    Ingresa al panel    
                </Button>

                <h6> Tienes problemas para ingresar? Por favor contactarse con asistencia técnica lo más pronto posbile. </h6>
            </div>
            </div>
            
            </div>
            </div>
    )
}