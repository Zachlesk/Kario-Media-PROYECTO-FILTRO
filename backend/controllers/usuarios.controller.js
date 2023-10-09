import db from '../connection/connection.js';
import { ObjectId } from 'mongodb';

const usuarios = db.collection('usuarios');

export const getUsuarios = async (req, res)=> {
    try {
        const usuario = await usuarios.find().toArray();
        res.json(usuario)
    } catch (error) {
        console.error(error)
    }
}

export const getUsuario = async (req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const usuario = await usuarios.findOne({_id: objectID});
        res.json(usuario)
    } catch (error) {
        console.error(error)
    }
}

export const postUsuario = async (req, res)=>{
    try {

        const { 
            nombre, 
            email, 
            imagen,
            telefono, 
            cargo, 
            password, 
            rol, 
            fecha_registro, 
            activo 
        } = req.body

        const data = {
            nombre, 
            email, 
            imagen,
            telefono, 
            cargo, 
            password, 
            rol, 
            fecha_registro, 
            activo 
        }
        const usuario = await usuarios.insertOne(data);
        res.json(usuario)
    } catch (error) {
        console.error(error)
    }

}

export const deleteUsuario = async (req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);
        const usuario = await usuarios.deleteOne({_id:objectID});
        res.json(usuario)
    } catch (error) {
        console.error(error)
    }
}

export const putUsuario = async(req, res)=>{
    try {
        const objectIdParams = req.params.id;
        const objectID = new ObjectId(objectIdParams);

        const { 
            nombre, 
            email, 
            imagen,
            telefono, 
            cargo, 
            password, 
            rol, 
            fecha_registro, 
            activo  
        } = req.body

        const data = {
            nombre, 
            email, 
            imagen,
            telefono, 
            cargo, 
            password, 
            rol, 
            fecha_registro, 
            activo 
        }
        const usuario = await usuarios.updateOne(
            {_id:objectID},
            { $set: data}
        );
        res.json(usuario)
    } catch (error) {
        console.error(error)
    }
}