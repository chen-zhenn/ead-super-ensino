import express, { Express, Request, Response, NextFunction } from "express";
import setMiddlewares from "./middlewares";

export const app: Express = express();
setMiddlewares(app);
