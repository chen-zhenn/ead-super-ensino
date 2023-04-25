import { Router } from "express";

export default (router: Router): void => {
    router.get("/exercicios", (req, res) => {
        res.status(200).json({exercicios: "..."})
    })
}