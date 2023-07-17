"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ComprasSchema = new mongoose_1.Schema({
    proveedor: {
        type: String,
        required: true,
    },
    producto: {
        type: String,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    fecha: {
        type: String,
        required: true,
    },
    nombre: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "nombre",
        required: true,
    },
    pagado: {
        type: Boolean,
        required: true,
        default: false,
    },
});
const Compras = (0, mongoose_1.model)("compras", ComprasSchema);
exports.default = Compras;
