import db from "../connection/connection.js";
import { ObjectId } from "mongodb";

const reportes = db.collection("reportes");

export const getReportes = async (req, res) => {
  try {
    const reporte = await reportes
      .aggregate([
        {
          $lookup: {
            from: "usuarios",
            localField: "usuario",
            foreignField: "_id",
            as: "detallesUsuario",
          },
        },
        {
          $lookup: {
            from: "indicadores",
            localField: "indicador_reportado",
            foreignField: "_id",
            as: "detallesIndicador",
          },
        },
      ])
      .toArray();
    res.json(reporte);
  } catch (error) {
    console.error(error);
  }
};

export const getReporte = async (req, res) => {
  try {
    const objectIdParams = req.params.id;
    const objectID = new ObjectId(objectIdParams);
    const reporte = await reportes.aggregate([
        {
            $match: {_id:objectID}
        },
        {
            $lookup: {
              from: "usuarios",
              localField: "usuario",
              foreignField: "_id",
              as: "detallesUsuario",
            },
          },
          {
            $lookup: {
              from: "indicadores",
              localField: "indicador_reportado",
              foreignField: "_id",
              as: "detallesIndicador",
            },
          },
    ]).toArray();
    res.json(reporte);
  } catch (error) {
    console.error(error);
  }
};

export const postReporte = async (req, res) => {
  try {
    const {
      usuario,
      indicador_reportado,
      titulo_reporte,
      fecha_reporte,
      resultado_indicador,
      motivo_reporte,
      recomendacion,
    } = req.body;

    const data = {
      usuario: new ObjectId(usuario),
      indicador_reportado: new ObjectId(indicador_reportado),
      titulo_reporte,
      fecha_reporte,
      resultado_indicador,
      motivo_reporte,
      recomendacion,
    };

    const reporte = await reportes.insertOne(data);
    res.json(reporte);
  } catch (error) {
    console.error(error);
  }
};

export const deleteReporte = async (req, res) => {
  try {
    const objectIdParams = req.params.id;
    const objectID = new ObjectId(objectIdParams);
    const reporte = await reportes.deleteOne({ _id: objectID });
    res.json(reporte);
  } catch (error) {
    console.error(error);
  }
};

export const putReporte = async (req, res) => {
  try {
    const objectIdParams = req.params.id;
    const objectID = new ObjectId(objectIdParams);

    const {
      usuario,
      indicador_reportado,
      titulo_reporte,
      fecha_reporte,
      resultado_indicador,
      motivo_reporte,
      recomendacion,
    } = req.body;

    const data = {
      usuario: new ObjectId(usuario),
      indicador_reportado: new ObjectId(indicador_reportado),
      titulo_reporte,
      fecha_reporte,
      resultado_indicador,
      motivo_reporte,
      recomendacion,
    };
    const reporte = await reportes.updateOne({ _id: objectID }, { $set: data });
    res.json(reporte);
  } catch (error) {
    console.error(error);
  }
};
