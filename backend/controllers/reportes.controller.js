import db from "../connection/connection.js";
import { ObjectId } from "mongodb";
import jwt  from 'jsonwebtoken';

const reportes = db.collection("reportes");
const usuarioCollection = db.collection("usuarios");

export const getReportes = async (req, res) => {
  try {
    const token = req.header("token");
        if(!token){
            return res.json({msg:"ingrese un token valido"})
        }
        let uid;
        try {
            const decoded = jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY);
            uid = decoded.uid;
        } catch (err) {
            return res.status(401).json({ msg: "Token inválido" });
        }
        const usuarioValido = await usuarioCollection.findOne({ _id: new ObjectId(uid) });
        if (!usuarioValido) {
            return res.json({ msg: "usuario no validado" })
        }  
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
    const token = req.header("token");
        if(!token){
            return res.json({msg:"ingrese un token valido"})
        }
        let uid;
        try {
            const decoded = jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY);
            uid = decoded.uid;
        } catch (err) {
            return res.status(401).json({ msg: "Token inválido" });
        }
        const usuarioValido = await usuarioCollection.findOne({ _id: new ObjectId(uid) });
        if (!usuarioValido) {
            return res.json({ msg: "usuario no validado" })
        } 
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
    const token = req.header("token");
        if(!token){
            return res.json({msg:"ingrese un token valido"})
        }
        let uid;
        try {
            const decoded = jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY);
            uid = decoded.uid;
        } catch (err) {
            return res.status(401).json({ msg: "Token inválido" });
        }
        const usuarioValido = await usuarioCollection.findOne({ _id: new ObjectId(uid) });
        if (!usuarioValido) {
            return res.json({ msg: "usuario no validado" })
        } 
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
    const token = req.header("token");
        if(!token){
            return res.json({msg:"ingrese un token valido"})
        }
        let uid;
        try {
            const decoded = jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY);
            uid = decoded.uid;
        } catch (err) {
            return res.status(401).json({ msg: "Token inválido" });
        }
        const usuarioValido = await usuarioCollection.findOne({ _id: new ObjectId(uid) });
        if (!usuarioValido) {
            return res.json({ msg: "usuario no validado" })
        } 
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
    const token = req.header("token");
        if(!token){
            return res.json({msg:"ingrese un token valido"})
        }
        let uid;
        try {
            const decoded = jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY);
            uid = decoded.uid;
        } catch (err) {
            return res.status(401).json({ msg: "Token inválido" });
        }
        const usuarioValido = await usuarioCollection.findOne({ _id: new ObjectId(uid) });
        if (!usuarioValido) {
            return res.json({ msg: "usuario no validado" })
        } 
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
