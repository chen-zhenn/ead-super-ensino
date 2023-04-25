import { Model, Document } from "mongoose";
import { IExercise } from "../../domain/IExercise";
import { IExerciseRepository } from "../../domain/IExerciseRepository";

export class ExerciseRepository implements IExerciseRepository {
    private readonly model: Model<Document & IExercise>;

    constructor(model: Model<Document & IExercise>) {
        this.model = model;
    }

    async findAll(): Promise<IExercise[]> {
        const exercises = await this.model.find().exec();
        return exercises
    }
}
