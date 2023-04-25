import request from "supertest";
import { app } from "../config/app";

describe("Exercicio route", () => {
    it("Deve retornar sucesso com status 200", async () => {
        app.get("/api/exercicios", (req, res) => {
            res.status(200).json({})
        })
        await request(app).get("/api/exercicios").expect(200);
    });
});
