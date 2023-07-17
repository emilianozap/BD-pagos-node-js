"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    departamento: {
        type: String,
        required: true,
    },
    dni: {
        type: Number,
        required: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    estado: {
        type: Boolean,
        required: true,
        default: true,
    },
});
const User = (0, mongoose_1.model)("Users", UserSchema);
exports.default = User;
