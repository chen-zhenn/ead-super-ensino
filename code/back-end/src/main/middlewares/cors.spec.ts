import request from "supertest";
import { app } from "../config/app";

describe("Cors middleware", () => {
    it("Deve permitir requisições de qualquer origem", async () => {
        app.get("/exercicios", (req, res) => {
            res.send()
        })
        await request(app)
            .get("/exercicios")
            .expect("Access-Control-Allow-Origin", "*")
    })
})
