import { Request, Response } from "express";
import Compras, { ICompras } from "../models/compras";
import User from "../models/user";

export const createCompra = async (req: Request, res: Response) => {
  const comprasData: ICompras = req.body;

  const { proveedor, producto, cantidad, fecha, precio, nombre, pagado } =
    comprasData;

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

  const userData = await User.findOne({ nombre: nombre });
  console.log(userData);

  if (!nombre) {
    res.json({
      msj: "el usuario no existe",
    });
    return;
  }

  const compra = new Compras({
    proveedor,
    producto,
    cantidad,
    fecha,
    precio,
    pagado,
    nombre: userData?._id,
  });

  await compra.save();

  res.json({
    msj: "los datos de la compra an sido subidos correctamente",
    compra,
  });
};

export const comprasRealizadas = async (req: Request, res: Response) => {
  const { pagado } = req.params;

  const comprasPagas: ICompras[] = await Compras.find({ pagado: pagado });

  res.json({
    comprasPagas,
  });
};
