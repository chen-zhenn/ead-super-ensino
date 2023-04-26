import { Express, Router } from "express";
import fg from "fast-glob";
import path from "path";
import fs from "fs/promises";

export default async (app: Express): Promise<void> => {
    const router = Router();
    const setRoute = async () => (await import(`../routes/exercicios-routes`)).default(router); //  Precisa ser refatorado
    
    app.use("/api", router);
    setRoute();
};
