import { IExercise } from "../../domain/IExercise"
import { IExerciseController } from "../../domain/IExerciseController"
import { IExerciseRepository } from "../../domain/IExerciseRepository"

export default class ExerciseController implements IExerciseController {
    constructor(private exerciseRepository: IExerciseRepository) {}
    async list():Promise<IExercise[]>{
        return []
    }
}