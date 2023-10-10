import { Router } from "express";
import { 
    getAyuda,
    getAyudas,
    postAyuda,
    deleteAyuda,
    putAyuda
} from "../controllers/ayudas.controller.js";

const router = Router();

router.get("/all", getAyudas);
router.get("/one/:id", getAyuda);
router.post("/post", postAyuda);
router.delete("/delete/:id", deleteAyuda);
router.put("/put/:id", putAyuda);

export default router;