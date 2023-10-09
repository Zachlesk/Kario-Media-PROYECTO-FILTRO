import { ObjectId } from "mongodb";
import db from "../connection/connection.js";


const ayudas = db.collection('ayudas');

export const getAyudas = async (req, res)=> {
    try {
        const ayuda = await ayudas.find().toArray();
        res.json(ayuda)
    } catch (error) {
        console.error(error)
    }
}

export const getAyuda = async (req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const ayuda = await ayudas.findOne({_id: objectID});
        res.json(ayuda)
    } catch (error) {
        console.error(error)
    }
}

export const postAyuda = async (req, res)=>{
    try {
        const usuarioID = new ObjectId(usuario); 
        const indicadorID = new ObjectId(indicador_de_ayuda);

        const {usuario, indicador_de_ayuda, titulo_ayuda,
            fecha_ayuda, area_asignada, prioridad, motivo_ayuda,
            estado } = req.body

        const data = {
            usuario: usuarioID,
            indicador_de_ayuda: indicadorID, 
            titulo_ayuda, 
            fecha_ayuda,
            area_asignada,
            prioridad,
            motivo_ayuda,
            estado,
        }
        const ayuda = await ayudas.insertOne(data);
        res.json(ayuda)
    } catch (error) {
        console.error(error)
    }

}

export const deleteAyuda = async (req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const ayuda = await ayudas.deleteOne({_id:objectID});
        res.json(ayuda)
    } catch (error) {
        console.error(error)
    }
}

export const putAyuda = async(req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const usuarioID = new ObjectId(usuario); 
        const indicadorID = new ObjectId(indicador_de_ayuda);

        const {usuario, indicador_de_ayuda, titulo_ayuda,
            fecha_ayuda, area_asignada, prioridad, motivo_ayuda,
            estado } = req.body

        const data = {
            usuario: usuarioID,
            indicador_de_ayuda: indicadorID, 
            titulo_ayuda, 
            fecha_ayuda,
            area_asignada,
            prioridad,
            motivo_ayuda,
            estado,
        }
        const ayuda = await ayudas.updateOne(
            {_id:objectID},
            { $set: data}
        );
        res.json(ayuda)
    } catch (error) {
        console.error(error)
    }
}