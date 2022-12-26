import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import "express-async-errors";
import { routes } from "./routes";
import { compareSync } from "bcrypt";

const portApi = 9001;

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const app = express();

app.use(express.json());
//app.use(cors({ origin: "*" })); //posso usar assim ou assim:
app.use(cors(corsOptions));
app.use(routes);

//-------------- Tratamento de Erros --------------------------------//
//obs 1: Precisa ser depois de todas as rotas...
//obs 2: Precisa instalar a dependencia: yarn add express-async-errors
//obs 3: precisa importar: import "express-async-errors";
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(portApi, () => console.log(`listening on port ${portApi}`));
