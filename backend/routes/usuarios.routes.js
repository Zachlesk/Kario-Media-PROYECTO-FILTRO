import { Router } from "express";
import {
    getUsuarios,
    getUsuario,
    postUsuario,
    deleteUsuario,
    putUsuario
} from '../controllers/usuarios.controller.js'

const router = Router();

router.get('/all', getUsuarios);
router.get('/one/:id', getUsuario);
router.post('/post', postUsuario);
router.delete('/delete/:id', deleteUsuario);
router.put('/put/:id', putUsuario);

export default router;