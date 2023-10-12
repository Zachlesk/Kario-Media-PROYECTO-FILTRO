import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import Button from "react-bootstrap/Button";
import logo from "../../assets/logo.png";
import LoadingScreen from '../../components/LoadingScreen';
import WelcomeUserComponent from '../../components/WelcomeUser';
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [showWelcomeUser, setShowWelcomeUser] = useState(false);
    const [userClickedLogin, setUserClickedLogin] = useState(false);

    const history = useNavigate();

    useEffect(() => {
      setTimeout(() => {
          setIsLoading(false); 
      }, 2000);
  }, []);

    const validarLogin = () => {
      setUserClickedLogin(true);
      setIsLoading(true);
        try {
            axios.post("http://localhost:8020/login/validate", {
                email, password
            }).then(data => {
                localStorage.setItem("token", data.data.token);
                setShowWelcomeUser(true);
                setTimeout(() => {
                  setIsLoading(false);
                  setShowWelcomeUser(false); 
                  history("/indicadores");
              }, 5000);
            }).catch(err => {
                console.log(err);
                setIsLoading(false);
            }).finally(() => {
                setIsLoading(false);
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="pagina-principal">
            {isLoading ? (
                <LoadingScreen />
            ) : showWelcomeUser ? (
                <WelcomeUserComponent />
            ) :
                <div className="login">
                    <div className="container-total">
                        <div className="container-logo">
                            <img src={logo} alt="Logo de KarioMedia" width={70} />
                            <h5> M E D I A</h5>
                        </div>
                        <div className="container-informacion">
                            <h2>
                                Bienvenido al panel digital de
                                <br /> KARIO Media
                            </h2>
                            <h4>
                                Por favor ingresa los siguientes datos para ingresar a la plataforma
                            </h4>
                            <Form>
                                <Form.Field>
                                    <label> Usuario </label>
                                    <br />
                                    <input
                                        type='text'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Field>
                                <br />
                                <Form.Field>
                                    <label> Contraseña </label>
                                    <br />
                                    <input
                                        type='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Field>
                                <br />
                                <Button type="submit" onClick={() => { validarLogin()}}>
                                    Ingresa al panel
                                </Button>
                            </Form>
                            <h6>
                                Tienes problemas para ingresar? Por favor contactarse con asistencia técnica lo más pronto posible.
                            </h6>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}


export default Login;
