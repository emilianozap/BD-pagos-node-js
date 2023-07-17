import { Router } from "express";
import {
  createUser,
  getUser,
  getUserDepartamentos,
  deleteUser,
} from "../controllers/user";

const router = Router();

router.post("/", createUser);

router.get("/", getUser);

router.get("/:departamento", getUserDepartamentos);

router.delete("/:dni", deleteUser);

export default router;
