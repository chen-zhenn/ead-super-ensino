import { ObjectId, Db } from "mongodb";
import { IExercise } from "../../../../domain/IExercise";
import { IExerciseRepository } from "../../../../domain/IExerciseRepository";

interface Exercise extends IExercise {
    _id?: ObjectId;
    createdAt?: Date;
} 

export class ExerciseRepository implements IExerciseRepository {
    private readonly collectionName = "exercicios";
    private readonly db: Db;
  
    constructor(db: Db) {
      this.db = db;
    }
  
    async list():Promise<any[]> {
      const collection = this.db.collection(this.collectionName);
      const exercises = (await collection.find().toArray()).map(item => item)
      return exercises
    }
  }
  
