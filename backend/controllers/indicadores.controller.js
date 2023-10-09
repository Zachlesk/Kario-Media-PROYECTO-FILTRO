import db from '../connection/connection.js';
import { ObjectId } from 'mongodb';

const indicadores = db.collection('indicadores');

export const getIndicadores = async (req, res)=> {
    try {
        const indicador = await indicadores.aggregate([{
            $lookup: {
                from: "usuarios",
                localField: "usuario",
                foreignField: "_id",
                as: "user"
            },
        },
        {
            $unwind: "$user",
        },
        {
            $project: {
                _id: 1,
                indicador: 1,
                descripcion: 1,
                "user.nombre": 1,
                categoria: 1,
                fecha_de_inicio: 1,
                fecha_de_terminacion: 1,
                formula : 1,
                frecuencia: 1,
                cumplimiento: 1,
                area: 1
            }
        }]).toArray();
        res.json(indicador)
    } catch (error) {
        console.error(error)
    }
}

export const getIndicador = async (req, res)=>{
    try {
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