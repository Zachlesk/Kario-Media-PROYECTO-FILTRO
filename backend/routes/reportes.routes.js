import { Router } from "express";

import {
    getReportes,
    getReporte,
    postReporte,
    deleteReporte,
    putReporte
} from '../controllers/reportes.controller.js'

const router = Router();

router.get('/all', getReportes);
router.get('/one/:id', getReporte);
router.post('/post', postReporte);
router.delete('/delete/:id', deleteReporte);
router.put('/put/:id', putReporte);

export default router;