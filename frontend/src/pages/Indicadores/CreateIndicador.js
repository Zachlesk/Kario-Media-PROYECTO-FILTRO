import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";



const token = localStorage.getItem("token")
const config = {
  headers: {
    token: token
  },
}


const CreateIndicador = () => {

  let history = useNavigate()

  const [indicador, set_indicador] = useState("");
  const [descripcion, set_descripcion] = useState("");
  const [usuario, set_usuario] = useState("");
  const [categoria, set_categoria] = useState("");
  const [fecha_de_inicio, set_fecha_de_inicio] = useState("");
  const [fecha_de_terminacion, set_fecha_de_terminacion] = useState("");
  const [formula, set_formula] = useState("");
  const [frecuencia, set_frecuencia] = useState("");
  const [cumplimiento, set_cumplimiento] = useState("");
  const [area, set_area] = useState("");


  const [allUsuarios, setAllUsuarios] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const allUsers = await axios.get("http://localhost:8020/usuarios/all", config);
        setAllUsuarios(allUsers.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [])


  const postData = () => {
    axios
      .post(`http://localhost:8020/indicadores/post`, {
        indicador,
        descripcion,
        usuario,
        categoria,
        fecha_de_inicio,
        fecha_de_terminacion,
        formula,
        frecuencia,
        cumplimiento,
        area
      }, config)
      .then(() => {
        history("/indicadores")
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <Form className="createForm">

      <Form.Field>
          <label>titulo reporte</label>
          <input
            placeholder="indicador"
            value={indicador}
            onChange={(e) => set_indicador(e.target.value)}
          ></input>
        </Form.Field>

        <Form.Field>
          <label>descripcion</label>
          <input
            placeholder="descripcion"
            value={descripcion}
            onChange={(e) => set_descripcion(e.target.value)}
          ></input>
        </Form.Field>

        <Form.Field>
          <label> seleccione usuario </label>
          <select name="usuarios">
            <option> seleccione usuario nuevo</option>
            {allUsuarios.map((data, i) => {
              return (
                <option key={i} value={data._id} onClick={(e)=> set_usuario(e.target.value)}> {data.nombre} </option>
              )
            })}
          </select>
        </Form.Field>
 
        <Form.Field>
          <label>categoria</label>
          <input
            placeholder="categoria"
            value={categoria}
            onChange={(e) => set_categoria(e.target.value)}
          ></input>
        </Form.Field>

        <Form.Field>
          <label>fecha de inicio</label>
          <input
            placeholder="fecha de inicio"
            value={fecha_de_inicio}
            onChange={(e) => set_fecha_de_inicio(e.target.value)}
          ></input>
        </Form.Field>

        <Form.Field>
          <label>fecha de terminacion</label>
          <input
            placeholder="fecha de terminacion"
            value={fecha_de_terminacion}
            onChange={(e) => set_fecha_de_terminacion(e.target.value)}
          ></input>
        </Form.Field>

        <Form.Field>
          <label>formula</label>
          <input
            placeholder="formula"
            value={formula}
            onChange={(e) => set_formula(e.target.value)}
          ></input>
        </Form.Field>

        <Form.Field>
          <label>frecuencia</label>
          <input
            placeholder="frecuencia"
            value={frecuencia}
            onChange={(e) => set_frecuencia(e.target.value)}
          ></input>
        </Form.Field>

        <Form.Field>
          <label>cumplimiento</label>
          <input
            placeholder="cumplimiento"
            value={cumplimiento}
            onChange={(e) => set_cumplimiento(e.target.value)}
          ></input>
        </Form.Field>

        <Form.Field>
          <label>area</label>
          <input
            placeholder="area"
            value={area}
            onChange={(e) => set_area(e.target.value)}
          ></input>
        </Form.Field>


        <Button type="submit" onClick={postData}>
          Crear
        </Button>
      </Form>
    </div>
  );
};

export default CreateIndicador;
