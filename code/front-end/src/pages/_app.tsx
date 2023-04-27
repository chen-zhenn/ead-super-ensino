import "@/styles/global.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { IExercise } from "@/domain/models/IExercise";
import Context from "@/presentation/contexts/exercicios";
import { makeExercise as exercise } from "@/main/factories/exercises/ExerciseFactory";

interface IData {
  _id: string;
  exercicios: IExercise[];
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const [data, setData] = useState<IData>({
    exercicios: [],
    _id: "",
  });

  useEffect(() => {
    exercise()
      .getData()
      .then((response) => {
        const [bodyData] = response.body;
        setData(bodyData)
      });
  }, []);

  return (
    <>
      <Context.Provider value={data}>
        <Component {...pageProps} />
      </Context.Provider>
    </>
  );
}
