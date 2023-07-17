import { Router } from "express";
import { createCompra, comprasRealizadas } from "../controllers/compras";

const router = Router();

router.post("/", createCompra);
router.get("/:pagado", comprasRealizadas);

export default router;
