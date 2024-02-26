import { Router } from "express";
import user from "./user";

const router = Router();

router.use("/usuario", user);

export default router;