import { Express, Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Content-Type', 'application/json');
    next();
};
