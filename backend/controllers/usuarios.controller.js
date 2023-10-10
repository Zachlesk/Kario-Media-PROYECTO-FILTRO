import db from '../connection/connection.js';
import { ObjectId } from 'mongodb';
import jwt  from 'jsonwebtoken';

const usuarios = db.collection('usuarios');
const usuarioCollection = db.collection('usuarios');
export const getUsuarios = async (req, res)=> {
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
        const usuario = await usuarios.find().toArray();
        res.json(usuario)
    } catch (error) {
        console.error(error)
    }
}

export const getUsuario = async (req, res)=>{
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
        const usuario = await usuarios.findOne({_id: objectID});
        res.json(usuario)
    } catch (error) {
        console.error(error)
    }
}

export const postUsuario = async (req, res)=>{
    try {
        const token = req.header("token");
        if(!token){
            return res.json({msg:"ingrese un token valido"})
        }
        
        let uid;
        try {
            const decoded = jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY);
            console.log(decoded);
            uid = decoded.uid;
        } catch (err) {
            return res.status(401).json({ msg: "Token inválido" });
        }
        const usuarioValido = await usuarioCollection.findOne({ _id: new ObjectId(uid) });
        if (!usuarioValido) {
            return res.json({ msg: "usuario no validado" })
        }  
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
        const usuario = await usuarios.deleteOne({_id:objectID});
        res.json(usuario)
    } catch (error) {
        console.error(error)
    }
}

export const putUsuario = async(req, res)=>{
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