import { Router } from "express";
import controlador from "../controllers/UserController";

const router = Router();

router.post("/", controlador.create);
router.get("/", controlador.list);

export default router;