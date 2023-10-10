import { Router } from "express";
import { Register } from "../controllers/register.controller.js";
import {check} from "express-validator";
import validateDocuments from "../middlewares/validate.document.js";

const router = Router();

router.post("/Register",
check('nombre', 'ingrese un nombre').not().isEmpty(),
check('cargo', 'ingrese un cargo').not().isEmpty(),
check('imagen', 'ingrese una imagen').not().isEmpty(),
check('telefono', 'ingrese un telefono').not().isEmpty(),
check('rol', 'ingrese un rol').not().isEmpty(),
check('fecha_registro', 'ingrese una fecha_registro').not().isEmpty(),
check('activo', 'Defina si esta activo o no').not().isEmpty(),
check('email', 'falta el email').isEmail(),
check('password', 'La contraseña tiene que tener mas de 6 caracteres').isLength({min:6}),
validateDocuments
,Register);

export default router