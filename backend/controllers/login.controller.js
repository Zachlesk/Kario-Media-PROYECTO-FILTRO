import db from "../connection/connection.js";
import generateJWT from "../helpers/generateToke.js";
import bcryptjs from "bcryptjs"

const usuario = db.collection('usuarios');

export const Login = async (req, res)=> {
    try {
        const { email , password } = req.body;

        const existeEmail = await usuario.findOne({email});
        if (!existeEmail){
            return res.status(400).json({
                msg: "el email no existe"
            })
        }

        if (existeEmail.activo === false){
            return res.status(400).json({
                msg:"el usuario no esta activo"
            })
        }

        const passwordValidado = await bcryptjs.compare(password, existeEmail.password)
        if (!passwordValidado){
            return res.json({ 
                message: 'Contraseña incorrecta' 
            }); 
        }

        const token = await generateJWT(existeEmail._id);
        res.json({
            existeEmail,
            token,
            success: true,
            message: 'Usuario Validado'
        })
    } catch (error) {
        console.error(error)
    }
}