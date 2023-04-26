import express, { Express, Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app:Express = express()

const port = process.env.PORT || 8000

app.get("/", (req, res) => {
    res.send("Index route!")
})

app.get("/exercicios", (req, res) => {
    res.send("Exercicios route!")
})

app.listen(port,() => {
    console.log(`Server is running at http://localhost:${port}`)
})