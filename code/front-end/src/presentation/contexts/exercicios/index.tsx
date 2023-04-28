import { createContext } from "react";
import { useEffect, useState } from "react";
import { IExercise } from "@/domain/models/IExercise";
import { makeExercise as exercise } from "@/main/factories/exercises/ExerciseFactory";

interface Props {
  children: React.ReactNode;
}

interface IData {
  _id: string;
  exercicios: IExercise[];
}

const data: IData = {
  exercicios: [],
  _id: "",
};

export const ExeciseContext = createContext<IData>(data);

export const ExerciseProvider = ({ children }: Props) => {
  const [exerciseData, setExerciseData] = useState<IData>(data);

  useEffect(() => {
    exercise()
      .getData()
      .then((response) => {
        const [bodyData] = response.body;
        const { _id, exercicios } = bodyData
        data._id = _id
        data.exercicios = exercicios
        setExerciseData(bodyData);
      });
  }, []);

  return (
    <ExeciseContext.Provider value={exerciseData}>
      {children}
    </ExeciseContext.Provider>
  );
};
