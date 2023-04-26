import { IExercise } from "./IExercise";

export interface IExerciseRepository {
    list: () => Promise<any[]>;
}