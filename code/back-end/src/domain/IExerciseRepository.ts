import { IExercise } from "./IExercise";

export interface IExerciseRepository {
    findAll: () => Promise<IExercise[]>;
}