import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import CreateReportes from "./CreateReportes";

export default function ReadReportes() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8020/reportes/all").then((response) => {
      console.log(response.data);
      setAPIData(response.data);
    });
  }, []);

  const setData = (data) => {
    console.log(data);
    const {
      _id,
      usuario,
      indicador_reportado,
      titulo_reporte,
      fecha_reporte,
      resultado_indicador,
      motivo_reporte,
      recomendacion,
    } = data;

    localStorage.setItem("id", _id);
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("indicador_reportado", indicador_reportado);
    localStorage.setItem("titulo_reporte", titulo_reporte);
    localStorage.setItem("fecha_reporte", fecha_reporte);
    localStorage.setItem("resultado_indicador", resultado_indicador);
    localStorage.setItem("motivo_reporte", motivo_reporte);
    localStorage.setItem("recomendacion", recomendacion);
  };

  const getData = () => {
    axios.get("http://localhost:8020/reportes/all").then((getData) => {
      setAPIData(getData.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`http://localhost:8020/reportes/delete/${id}`).then(() => {
      getData();
    });
  };
  return (
    <div>
      <Link to="/createReporte">
        <Button> crear nuevo reporte </Button>
      </Link>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Usuario</Table.HeaderCell>
            <Table.HeaderCell>Indicador Reportado </Table.HeaderCell>
            <Table.HeaderCell>Titulo reporte</Table.HeaderCell>
            <Table.HeaderCell>Fecha reporte</Table.HeaderCell>
            <Table.HeaderCell>Resultado Indicador</Table.HeaderCell>
            <Table.HeaderCell>Motivo Reporte</Table.HeaderCell>
            <Table.HeaderCell>Recomendacion</Table.HeaderCell>

            <Table.HeaderCell>Actualizar</Table.HeaderCell>
            <Table.HeaderCell>Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.detallesUsuario[0].nombre}</Table.Cell>
                <Table.Cell>{data.detallesIndicador[0].indicador}</Table.Cell>
                <Table.Cell>{data.titulo_reporte}</Table.Cell>
                <Table.Cell>{data.fecha_reporte}</Table.Cell>
                <Table.Cell>{data.resultado_indicador}</Table.Cell>
                <Table.Cell>{data.motivo_reporte}</Table.Cell>
                <Table.Cell>{data.recomendacion}</Table.Cell>
                <Link to="/update">
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Actualizar</Button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <Button onClick={() => onDelete(data._id)}>Eliminar</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
