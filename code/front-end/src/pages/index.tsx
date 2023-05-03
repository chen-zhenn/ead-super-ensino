import Head from "next/head";
import { memo } from "react";
import { makeExercise as exercise } from "@/main/factories/exercises/ExerciseFactory";
import { IExercise } from "@/domain/models/IExercise";
import DisciplinasList from "@/presentation/components/list/disciplinas";
import styles from "@/pages/index.module.css";

interface IExerciseData {
  _id: string;
  exercicios: IExercise[];
}

interface Props {
  exercises: IExerciseData;
}

function Home({ exercises }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>EAD - Super Ensino Web App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          justifyContent: "flex-start",
          marginRight: "auto",
          paddingTop: "0.625rem",
        }}
      >
        <DisciplinasList exercises={exercises} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export default memo(Home);

export async function getStaticProps() {
  const exercises: IExerciseData = {
    exercicios: [],
    _id: "",
  };

  const remoteData = await exercise();
  try {
    remoteData
      .getData()
      .then((response) => {
        const [bodyData] = response.body;
        const { _id, exercicios } = bodyData;
        exercises._id = _id;
        exercises.exercicios = exercicios;
      })
      .catch((error) => {
        remoteData
          .getMock()
          .then((response) => {
            exercises.exercicios = response.exercicios;
          });
      });
  } catch (error) {}

  return {
    props: { exercises },
  };
}
