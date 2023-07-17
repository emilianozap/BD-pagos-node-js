import { Model, Schema, model } from "mongoose";

export interface IUser {
  departamento: string;
  dni: number;
  nombre: string;
  estado: boolean;
}

const UserSchema = new Schema<IUser>({
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

const User: Model<IUser> = model<IUser>("Users", UserSchema);
export default User;
