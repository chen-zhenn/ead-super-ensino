import express, { Express, Request, Response, NextFunction } from "express";
import setMiddlewares from "./middlewares";
import setRoutes from "./routes";

export const app: Express = express();
setMiddlewares(app);
setRoutes(app);