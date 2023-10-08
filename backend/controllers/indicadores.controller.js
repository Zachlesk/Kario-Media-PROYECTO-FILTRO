import db from '../connection/connection.js';
import { ObjectId } from 'mongodb';

const indicadores = db.collection('indicadores');

export const getIndicadores = async (req, res)=> {
    try {
        const indicador = await indicadores.find().toArray();
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
            categoria, 
            fecha_de_inicio, 
            fecha_de_terminacion, 
            formula, 
            frecuencia, 
            cumplimiento, 
            area } = req.body

        const data = {
            indicador,
            descripcion, 
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
            categoria, 
            fecha_de_inicio, 
            fecha_de_terminacion, 
            formula, 
            frecuencia, 
            cumplimiento, 
            area } = req.body

        const data = {
            indicador,
            descripcion, 
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