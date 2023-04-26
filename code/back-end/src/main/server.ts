import dotenv from "dotenv";
import { app } from "./config/app";
import { MongoDatabase } from "../infra/database/mongodb/MongoDatabase";

dotenv.config();
const port = process.env.PORT || 8000;
const dbMongo = MongoDatabase.getInstance();

dbMongo.connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(`Erro ao conectar ao banco de dados: ${error}`)
  });
