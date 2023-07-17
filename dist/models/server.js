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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../routes/user"));
const compras_1 = __importDefault(require("../routes/compras"));
const config_1 = require("../dataBase/config");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.conexionaDB();
        this.middlewares();
        this.routes();
    }
    conexionaDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.conectarBD)();
        });
    }
    middlewares() {
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use("/user", user_1.default);
        this.app.use("/compras", compras_1.default);
    }
    listen() {
        this.app.listen(3015, () => {
            console.log(`corriendo en el puerto 3015`);
        });
    }
}
exports.Server = Server;
