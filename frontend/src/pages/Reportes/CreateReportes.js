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


const CreateReportes = () => {

  let history = useNavigate()

  const [usuario, set_usuario] = useState("");
  const [indicador_reportado, set_indicador_reportado] = useState("");
  const [titulo_reporte, set_titulo_reporte] = useState("");
  const [fecha_reporte, set_fecha_reporte] = useState("");
  const [resultado_indicador, set_resultado_indicador] = useState("");
  const [motivo_reporte, set_motivo_reporte] = useState("");
  const [recomendacion, set_recomendacion] = useState("");
  

  const [allUsuarios, setAllUsuarios] = useState([]);
  const [allIndicadores, setAllIndicadores] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const allUsers = await axios.get("http://localhost:8020/usuarios/all", config);
        const allIndicadores = await axios.get("http://localhost:8020/indicadores/all", config);
        setAllIndicadores(allIndicadores.data);
        setAllUsuarios(allUsers.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [])


  const postData = () => {
    axios
      .post(`http://localhost:8020/reportes/post`, {
        usuario,
        indicador_reportado,
        titulo_reporte,
        fecha_reporte,
        resultado_indicador,
        motivo_reporte,
        recomendacion,
      }, config)
      .then(() => {
        history("/reportes")
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <Form className="createForm">

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
        <label> seleccione indicador </label>
          <select name="indicador">
          <option> seleccione indicador</option>
            {allIndicadores.map((data, i) => {
              return (
                <option key={i} value={data._id} onClick={(e)=> set_indicador_reportado(e.target.value)}> {data.indicador}  </option>
              )
            })}
          </select>
        </Form.Field>

        <Form.Field>
          <label>titulo reporte</label>
          <input
            placeholder="titulo reporte"
            value={titulo_reporte}
            onChange={(e) => set_titulo_reporte(e.target.value)}
          ></input>
        </Form.Field>

        <Form.Field>
          <label>fecha reporte</label>
          <input
            placeholder="fecha reporte"
            value={fecha_reporte}
            onChange={(e) => set_fecha_reporte(e.target.value)}
          ></input>
        </Form.Field>

        <Form.Field>
          <label>resultado indicador</label>
          <input
            placeholder="resultado indicador"
            value={resultado_indicador}
            onChange={(e) => set_resultado_indicador(e.target.value)}
          ></input>
        </Form.Field>

        <Form.Field>
          <label>motivo reporte</label>
          <input
            placeholder="motivo reporte"
            value={motivo_reporte}
            onChange={(e) => set_motivo_reporte(e.target.value)}
          ></input>
        </Form.Field>

        <Form.Field>
          <label>recomendacion</label>
          <input
            placeholder="recomendacion"
            value={recomendacion}
            onChange={(e) => set_recomendacion(e.target.value)}
          ></input>
        </Form.Field>

        <Button type="submit" onClick={postData}>
          Crear
        </Button>
      </Form>
    </div>
  );
};

export default CreateReportes;
