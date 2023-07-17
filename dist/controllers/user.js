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
exports.deleteUser = exports.getUserDepartamentos = exports.getUser = exports.createUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const { nombre, dni, departamento, estado } = userData;
    if (!nombre) {
        res.json({
            msj: "no has ingresado un nombre de usuario",
        });
        return;
    }
    if (!dni) {
        res.json({
            msj: "no has ingresado tu dni",
        });
        return;
    }
    if (!departamento) {
        res.json({
            msj: "no has ingresado un departamento",
        });
        return;
    }
    const userExistsBD = yield user_1.default.findOne({ dni: dni });
    if (userExistsBD) {
        res.json({
            msj: "el usuario ya existe en la base de datos",
        });
        return;
    }
    const user = new user_1.default({ nombre, dni, departamento, estado });
    yield user.save();
    res.json({
        msj: "usuario registrado",
        user,
    });
});
exports.createUser = createUser;
const getUser = ({}, res) => __awaiter(void 0, void 0, void 0, function* () {
    const condicion = { estado: true };
    const users = yield user_1.default.find(condicion);
    res.json({
        users,
    });
});
exports.getUser = getUser;
const getUserDepartamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { departamento } = req.params;
    const user = yield user_1.default.find({ departamento: departamento });
    res.json({
        user,
    });
});
exports.getUserDepartamentos = getUserDepartamentos;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dni } = req.params;
    const user = yield user_1.default.findOneAndDelete({ dni: dni });
    if (!user) {
        res.json({
            msj: "no existe el usuario buscado",
        });
        return;
    }
    res.json({
        user,
    });
});
exports.deleteUser = deleteUser;
