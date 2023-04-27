import { createContext } from "react";
import { IExercise } from "@/domain/models/IExercise";
interface IData {
  _id: string;
  exercicios: IExercise[];
}

let data: IData = {
    exercicios: [],
    _id: "",
}

export default createContext<IData>(data);
