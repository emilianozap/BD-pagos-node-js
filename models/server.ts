import express, { Express } from "express";
import routerUser from "../routes/user";
import routerCompras from "../routes/compras";
import { conectarBD } from "../dataBase/config";

export class Server {
  app: Express;
  constructor() {
    this.app = express();
    this.conexionaDB();
    this.middlewares();
    this.routes();
  }

  async conexionaDB(): Promise<void> {
    await conectarBD();
  }

  middlewares(): void {
    this.app.use(express.json());
  }

  routes(): void {
    this.app.use("/user", routerUser);
    this.app.use("/compras", routerCompras);
  }

  listen(): void {
    this.app.listen(3015, () => {
      console.log(`corriendo en el puerto 3015`);
    });
  }
}
