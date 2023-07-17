import { Model, Schema, model, ObjectId } from "mongoose";

export interface ICompras {
  proveedor: string;
  producto: string;
  cantidad: number;
  precio: number;
  fecha: string;
  nombre: ObjectId;
  pagado: boolean;
}

const ComprasSchema = new Schema<ICompras>({
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
    type: Schema.Types.ObjectId,
    ref: "nombre",
    required: true,
  },
  pagado: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Compras: Model<ICompras> = model<ICompras>("compras", ComprasSchema);
export default Compras;
