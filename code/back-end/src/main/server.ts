import dotenv from "dotenv";
import { app } from "./config/app";
import { MongooseDatabase } from "../infra/database/MongooseDatabase";

dotenv.config();
const port = process.env.PORT || 8000;
const db = new MongooseDatabase();

db.start()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.log(`Erro ao conectar ao banco de dados: ${error}`)
    });
