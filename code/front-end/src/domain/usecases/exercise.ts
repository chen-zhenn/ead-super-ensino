import { IExercise } from "domain/models/IExercise"

export interface Exercise {
    list: () => Promise<IExercise[]>
}