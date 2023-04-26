import { MongoDatabase } from "../../infra/database/mongodb/MongoDatabase";
import { ExerciseRepository } from "../../infra/database/mongodb/exercise/ExerciseRepository";
import ExerciseController from "../../presentation/controllers/ExerciseController";

export const makeExerciseController = async () => {
    const dbMongo = MongoDatabase.getInstance();
    const db = await dbMongo.start();
    const exerciseRepository = new ExerciseRepository(db);
    return new ExerciseController(exerciseRepository);
  }