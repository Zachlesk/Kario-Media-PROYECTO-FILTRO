import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Form, Button } from 'semantic-ui-react'

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
                history("/")
            }).catch(err=>{
                console.log(err);
            })

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Form className="createForm">

                <Form.Field>
                    <label>Email</label>
                    <input
                        placeholder="ingrese Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </Form.Field>

                <Form.Field>
                    <label>Contraseña </label>
                    <input
                        placeholder="ingrese Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </Form.Field>

                <Button type='submit' onClick={()=> validarLogin()}> ingresar </Button>

            </Form>
        </div>
    )
}

export default Login
