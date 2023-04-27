import { createContext } from "react";
import { IExercise } from "@/domain/models/IExercise";

interface IData {
    _id: string;
    exercicios: IExercise[]; 
}

export default createContext<IData>({
    exercicios: [],
    _id: ""
}) 