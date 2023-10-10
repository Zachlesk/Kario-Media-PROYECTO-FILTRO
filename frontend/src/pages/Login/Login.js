import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Form } from 'semantic-ui-react'
import Button from "react-bootstrap/Button";
import logo from "../../assets/logo.png";
import "./Login.css"

const Login = () => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const history = useNavigate()

    const validarLogin = ()=>{
        try {
            axios.post("http://localhost:8020/login/validate",{
                email,password
            }).then(data => {
                localStorage.setItem("token",data.data.token);
                history("/indicadores")
            }).catch(err=>{
                console.log(err);
            })

        } catch (error) {
            console.log(error);
        }
    }

return (
    <div className="pagina-principal">
      <div className="login">
        <div className="container-total">
          <div className="container-logo">
            <img src={logo} alt="Logo de KarioMedia" width={70}></img>
            <h5> M E D I A</h5>
          </div>
          <div className="container-informacion">
            <h2>
              Bienvenido al panel digital de
              <br /> KARIO Media
            </h2>
            <h4>
              Por favor ingresa los siguientes datos para ingresar a la
              plataforma
            </h4>
            <Form>
            <Form.Field>
                <label> Usuario </label>
                <br />
                <input
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
            </Form.Field>
            
            <br />
            <Form.Field>
                <label> Contraseña </label>
                <br /> 
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
            </Form.Field>

            <br />
            <Button type="submit" variant="secondary" onClick={()=> validarLogin()}>
              Ingresa al panel
            </Button>
            </Form>
            <h6> 
              Tienes problemas para ingresar? Por favor contactarse con
              asistencia técnica lo más pronto posbile.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login
