"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comprasRealizadas = exports.createCompra = void 0;
const compras_1 = __importDefault(require("../models/compras"));
const user_1 = __importDefault(require("../models/user"));
const createCompra = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const comprasData = req.body;
    const { proveedor, producto, cantidad, fecha, precio, nombre, pagado } = comprasData;
    if (!proveedor) {
        res.json({
            msj: "faltan datos del proveedor por subir",
        });
        return;
    }
    if (!producto) {
        res.json({
            msj: "faltan nombre del producto",
        });
        return;
    }
    if (!cantidad) {
        res.json({
            msj: "faltan la cantidad del producto comprado",
        });
        return;
    }
    if (!fecha) {
        res.json({
            msj: "faltan la fecha en q compraste el producto",
        });
        return;
    }
    if (!nombre) {
        res.json({
            msj: "faltan nombre del usuario",
        });
        return;
    }
    const userData = yield user_1.default.findOne({ nombre: nombre });
    console.log(userData);
    if (!nombre) {
        res.json({
            msj: "el usuario no existe",
        });
        return;
    }
    const compra = new compras_1.default({
        proveedor,
        producto,
        cantidad,
        fecha,
        precio,
        pagado,
        nombre: userData === null || userData === void 0 ? void 0 : userData._id,
    });
    yield compra.save();
    res.json({
        msj: "los datos de la compra an sido subidos correctamente",
        compra,
    });
});
exports.createCompra = createCompra;
const comprasRealizadas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pagado } = req.params;
    const comprasPagas = yield compras_1.default.find({ pagado: pagado });
    res.json({
        comprasPagas,
    });
});
exports.comprasRealizadas = comprasRealizadas;
