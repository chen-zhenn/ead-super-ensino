import { IExercise } from "./IExercise";

export interface IExerciseController {
    list: () =>  Promise<IExercise[]>
} 