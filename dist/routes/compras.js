"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const compras_1 = require("../controllers/compras");
const router = (0, express_1.Router)();
router.post("/", compras_1.createCompra);
router.get("/:pagado", compras_1.comprasRealizadas);
exports.default = router;
