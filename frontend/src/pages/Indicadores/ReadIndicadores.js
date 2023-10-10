import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import BotonModal from "../../components/BotonModal";
import ModalUser from "../../components/ModalUser";


const token = localStorage.getItem("token");
const config = {
  headers: {
    token: token,
  },
};

export default function ReadIndicadores() {
  
  const [botonDelete, setBotonDelete] = useState(false);

  //bootstrap para perfil
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8020/indicadores/all", config)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    console.log(data);
    const {
      _id,
      indicador,
      descripcion,
      usuario,
      categoria,
      fecha_de_inicio,
      fecha_de_terminacion,
      formula,
      frecuencia,
      cumplimiento,
      area,
    } = data;

    localStorage.setItem("id", _id);
    localStorage.setItem("indicador", indicador);
    localStorage.setItem("descripcion", descripcion);
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("categoria", categoria);
    localStorage.setItem("fecha_de_inicio", fecha_de_inicio);
    localStorage.setItem("fecha_de_terminacion", fecha_de_terminacion);
    localStorage.setItem("formula", formula);
    localStorage.setItem("frecuencia", frecuencia);
    localStorage.setItem("cumplimiento", cumplimiento);
    localStorage.setItem("area", area);
  };

  const getData = () => {
    axios
      .get("http://localhost:8020/indicadores/all", config)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:8020/indicadores/delete/${id}`, config)
      .then(() => {
        getData();
      });
  };
  return (
    <div>
      <div className="barra">
        <div>
          <Link to="/createIndicador">
            <Button className="boton-barra"> Añadir </Button>
          </Link>
        </div>

        <Button
          className="boton-barra"
          onClick={() => window.location.reload(true)}
        >
          Refrescar
        </Button>

        <div>
          <Button
            className="boton-barra"
            onClick={() => {
              if (botonDelete) {
                setBotonDelete(false);
              }else{
                setBotonDelete(true)
              }
            }}
          >
            borrar
          </Button>
        </div>

        <div>logo</div>

        <div>
          <Link to="/reportes">reportar</Link>
        </div>
        
        <div>ayuda</div>

        <div>
          <BotonModal handleShow={handleShow} />
        </div>

      </div>

      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>indicador</Table.HeaderCell>
            <Table.HeaderCell>descripcion </Table.HeaderCell>
            <Table.HeaderCell>categoria</Table.HeaderCell>
            <Table.HeaderCell>fecha_de_inicio</Table.HeaderCell>
            <Table.HeaderCell>fecha_de_terminacion</Table.HeaderCell>
            <Table.HeaderCell>formula</Table.HeaderCell>
            <Table.HeaderCell>frecuencia</Table.HeaderCell>
            <Table.HeaderCell>cumplimiento</Table.HeaderCell>
            <Table.HeaderCell>area</Table.HeaderCell>

            <Table.HeaderCell>Actualizar</Table.HeaderCell>
              {botonDelete ? (<Table.HeaderCell>Eliminar</Table.HeaderCell>) : null}
            </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.indicador}</Table.Cell>
                <Table.Cell>{data.descripcion}</Table.Cell>
                <Table.Cell>{data.categoria}</Table.Cell>
                <Table.Cell>{data.fecha_de_inicio}</Table.Cell>
                <Table.Cell>{data.fecha_de_terminacion}</Table.Cell>
                <Table.Cell>{data.formula}</Table.Cell>
                <Table.Cell>{data.frecuencia}</Table.Cell>
                <Table.Cell>{data.cumplimiento}</Table.Cell>
                <Table.Cell>{data.area}</Table.Cell>
                <Link to="/updateIndicador">
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Actualizar</Button>
                  </Table.Cell>
                </Link>

                {botonDelete ? (<Table.Cell> <Button onClick={() => onDelete(data._id)}>Eliminar</Button> </Table.Cell>) : null}
                
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>


   {/* modal de usuario */}
    <ModalUser handleClose={handleClose} show={show} />

    </div>
  );
}
