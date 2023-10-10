import { Router } from "express";
import { Login } from "../controllers/login.controller.js";
import { check } from "express-validator";
import validateDocuments from "../middlewares/validate.document.js";

const router = Router();

router.post("/validate",
check('email', 'Ingrese el email correcto').isEmail(),
check('password', 'Ingrese una contraseña de mas de 6 digitos').isLength({min:6}),
validateDocuments
,Login);

export default router