import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv';
import { IDatabase } from '../IDatabase';

dotenv.config()

export class MongoDatabase implements IDatabase {
  collection(collectionName: string) {
      throw new Error("Method not implemented.");
  }
  private client: MongoClient | null = null;
  private db: Db | null = null;
  // private connString = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
  private connString = `mongodb://mongo:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`;
  private static instance: MongoDatabase;

  public static getInstance(): MongoDatabase {
    if (!MongoDatabase.instance) {
      MongoDatabase.instance = new MongoDatabase();
    }
    return MongoDatabase.instance;
  }

  async connect(): Promise<void> {
    this.client = await MongoClient.connect(this.connString);
    this.db = this.client.db();
    console.log('Connected to MongoDB!');
  }

  async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close();
      console.log('Disconnected from MongoDB!');
    }
  }

  public async start(): Promise<Db> {
    if (!this.db) {
      const client = await MongoClient.connect(process.env.MONGO_URL || this.connString);
      this.db = client.db(process.env.MONGO_DB_NAME);
    }
    return this.db;
  }
}
