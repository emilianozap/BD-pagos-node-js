import { Request, Response } from "express";
import User, { IUser } from "../models/user";

export const createUser = async (req: Request, res: Response) => {
  const userData: IUser = req.body;

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

  const userExistsBD = await User.findOne({ dni: dni });
  if (userExistsBD) {
    res.json({
      msj: "el usuario ya existe en la base de datos",
    });
    return;
  }

  const user = new User({ nombre, dni, departamento, estado });

  await user.save();

  res.json({
    msj: "usuario registrado",
    user,
  });
};

export const getUser = async ({}, res: Response) => {
  const condicion = { estado: true };

  const users: IUser[] = await User.find(condicion);

  res.json({
    users,
  });
};

export const getUserDepartamentos = async (req: Request, res: Response) => {
  const { departamento } = req.params;

  const user: IUser[] | null = await User.find({ departamento: departamento });

  res.json({
    user,
  });
};

export const deleteUser = async (req: Request, res: Response) => {
  const { dni } = req.params;

  const user = await User.findOneAndDelete({ dni: dni });

  if (!user) {
    res.json({
      msj: "no existe el usuario buscado",
    });
    return;
  }

  res.json({
    user,
  });
};
