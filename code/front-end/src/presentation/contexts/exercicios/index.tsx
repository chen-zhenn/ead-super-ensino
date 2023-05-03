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
ExeciseContext.displayName = "ExeciseContext";

export const ExerciseProvider = ({ children }: Props) => {
  const [exerciseData, setExerciseData] = useState<IData>(data);

  useEffect(() => {
    try {
      exercise()
        .getData()
        .then((response) => {
          const [bodyData] = response.body;
          setExerciseData(bodyData);
        })
        .catch((error) => {
          exercise()
            .getMock()
            .then((response) => {
              setExerciseData({ _id: "", ...response });
            });
        });
    } catch (error) {}
  }, []);

  return (
    <ExeciseContext.Provider value={exerciseData}>
      {children}
    </ExeciseContext.Provider>
  );
};
