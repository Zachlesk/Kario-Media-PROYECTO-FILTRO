import { Router } from "express";
import {
    getIndicadores,
    getIndicador,
    postIndicador,
    deleteIndicador,
    putIndicador
} from '../controllers/indicadores.controller.js'

const router = Router();

router.get('/all', getIndicadores);
router.get('/one/:id', getIndicador);
router.post('/post', postIndicador);
router.delete('/delete/:id', deleteIndicador);
router.put('/put/:id', putIndicador);

export default router;