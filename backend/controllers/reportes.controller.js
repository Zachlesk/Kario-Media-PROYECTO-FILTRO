import db from '../connection/connection.js';
import { ObjectId } from 'mongodb';

const reportes = db.collection('reportes');

export const getReportes = async (req, res) => {
    try {
        const reporte = await reportes.find().toArray();
        res.json(reporte)
    } catch (error) {
        console.error(error)
    }
}

export const getReporte = async (req, res) => {
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const reporte = await reportes.findOne({ _id: objectID });
        res.json(reporte)
    } catch (error) {
        console.error(error)
    }
}

export const postReporte = async (req, res) => {
    try {

        const {
            usuario,
            indicador_reportado,
            titulo_reporte,
            fecha_reporte,
            resultado_indicador,
            motivo_reporte,
            recomendacion } = req.body

        const data = {
            usuario,
            indicador_reportado,
            titulo_reporte,
            fecha_reporte,
            resultado_indicador,
            motivo_reporte,
            recomendacion
        }

        const reporte = await reportes.insertOne(data);
        res.json(reporte)
    } catch (error) {
        console.error(error)
    }

}

export const deleteReporte = async (req, res) => {
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const reporte = await reportes.deleteOne({ _id: objectID });
        res.json(reporte)
    } catch (error) {
        console.error(error)
    }
}

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
            recomendacion } = req.body

        const data = {
            usuario,
            indicador_reportado,
            titulo_reporte,
            fecha_reporte,
            resultado_indicador,
            motivo_reporte,
            recomendacion
        }
        const reporte = await reportes.updateOne(
            { _id: objectID },
            { $set: data }
        );
        res.json(reporte)
    } catch (error) {
        console.error(error)
    }
}