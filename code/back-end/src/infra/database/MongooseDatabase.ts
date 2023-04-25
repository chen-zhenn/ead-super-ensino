import mongoose, { Connection } from "mongoose";
import dotenv from 'dotenv';
import { IDatabase } from "./IDatabase";

dotenv.config()

export class MongooseDatabase implements IDatabase {
    private connection: Connection = mongoose.connection;

    async connect(): Promise<void> {
        const connectionString = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
        this.connection = await mongoose.createConnection(connectionString);
    }

    async disconnect(): Promise<void> {
        await this.connection.close();
    }

    async start(): Promise<void> {
        await this.connect();
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    }
}
