import { IExercise } from "../../domain/IExercise"
import { IExerciseController } from "../../domain/IExerciseController"

export default class ExerciseController implements IExerciseController {
    list():IExercise[]{
        return []
    }
}