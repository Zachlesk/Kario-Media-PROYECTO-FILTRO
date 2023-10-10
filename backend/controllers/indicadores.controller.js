import db from '../connection/connection.js';
import { ObjectId } from 'mongodb';
import jwt from "jsonwebtoken";

const indicadores = db.collection('indicadores');
const usuarioCollection = db.collection('usuarios');

export const getIndicadores = async (req, res)=> {
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
        const indicador = await indicadores.aggregate([{
            $lookup: {
                from: "usuarios",
                localField: "usuario",
                foreignField: "_id",
                as: "user"
            },
        }
        ]).toArray();
        res.json(indicador)
    } catch (error) {
        console.error(error)
    }
}

export const getIndicador = async (req, res)=>{
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
        const indicador = await indicadores.findOne({_id: objectID});
        res.json(indicador)
    } catch (error) {
        console.error(error)
    }
}

export const postIndicador = async (req, res)=>{
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
        const { indicador, 
            descripcion, 
            usuario,
            categoria, 
            fecha_de_inicio, 
            fecha_de_terminacion, 
            formula, 
            frecuencia, 
            cumplimiento, 
            area } = req.body

        const usuarioObjectId = new ObjectId(usuario);

        const data = {
            indicador,
            descripcion, 
            usuario: usuarioObjectId,
            categoria, 
            fecha_de_inicio,
            fecha_de_terminacion,
            formula,
            frecuencia,
            cumplimiento,
            area
        }
        const indicadors = await indicadores.insertOne(data);
        res.json(indicadors)
    } catch (error) {
        console.error(error)
    }

}

export const deleteIndicador = async (req, res)=>{
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
        const indicador = await indicadores.deleteOne({_id:objectID});
        res.json(indicador)
    } catch (error) {
        console.error(error)
    }
}

export const putIndicador = async(req, res)=>{
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

        const { indicador, 
            descripcion, 
            usuario,
            categoria, 
            fecha_de_inicio, 
            fecha_de_terminacion, 
            formula, 
            frecuencia, 
            cumplimiento, 
            area } = req.body

        const usuarioObjectId = new ObjectId(usuario);

        const data = {
            indicador,
            descripcion, 
            usuario: usuarioObjectId,
            categoria, 
            fecha_de_inicio,
            fecha_de_terminacion,
            formula,
            frecuencia,
            cumplimiento,
            area
        }
        const indicadors = await indicadores.updateOne(
            {_id:objectID},
            { $set: data}
        );
        res.json(indicadors)
    } catch (error) {
        console.error(error)
    }
}