import request from "supertest";
import { app } from "../config/app";

describe("Content type middleware", () => {
    it("Deve retornar um content-type do tipo json", async () => {
        app.get("/exercicios", (req, res) => {
            res.send('')
        })
        await request(app)
            .get("/exercicios")
            .expect('Content-Type', /json/)
    })
})
