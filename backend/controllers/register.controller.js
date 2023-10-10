import db from "../connection/connection.js";
import bcryptjs from "bcryptjs";


const usuario = db.collection('usuarios');

export const Register = async (req, res)=> {
    try {
        const { nombre,
            email,
            imagen,
            telefono,
            cargo,
            password,
            rol,
            fecha_registro,
            activo } = req.body;

            const usuarioCreate = {
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

        const existeEmail = await usuario.findOne({email});
        if(existeEmail){
            return res.status(400).json({
                msg: "Email ya esta registrado"
            })
        }
        const salt = bcryptjs.genSaltSync();
        usuarioCreate.password = bcryptjs.hashSync(password, salt);
        const result = await usuario.insertOne(usuarioCreate);
        res.json(result);
    } catch (error) {
        console.error(error)
    }
}