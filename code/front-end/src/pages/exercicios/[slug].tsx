import { GetStaticPropsContext, GetStaticPathsContext } from "next";
import { useRouter } from "next/router";
import { memo, useContext, useEffect, useState } from "react";
import { makeExercise as exercise } from "@/main/factories/exercises/ExerciseFactory";
import { ExeciseContext } from "@/presentation/contexts/exercicios";
import { IExercise } from "@/domain/models/IExercise";
import NavBreadcrumb from "@/presentation/components/breadcrumb";
import Stepper from "@/presentation/components/stepper";
interface IExerciseData {
  _id: string;
  exercicios: IExercise[];
}

const exercises: IExerciseData = {
  exercicios: [],
  _id: "",
};
interface Props {
  exercises: IExerciseData;
  params: any;
}

function Exercises({ exercises, params }: Props) {
  const router = useRouter();
  const { asPath } = router; 
  const { slug } = params;
  const { exercicios } = useContext(ExeciseContext) || exercises;
  const [data, seData] = useState<IExercise[]>([]);
  const [path] = useState<string>(decodeURIComponent(asPath))

  useEffect(() => {
    seData(exercicios.filter((item) => item.disciplina === slug));
  }, [exercicios, slug]);

  return (
    <>
      <h2>Exercício - {slug}</h2>
      <NavBreadcrumb path={path} />
      <Stepper data={data} />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {

  const { params } = context

  return {
    props: { exercises, params },
  };
}

export async function getStaticPaths(context: GetStaticPathsContext) {
  interface ISlug {
    slug: string;
  }
  interface IParams {
    params: ISlug;
  }

  const slugs: Set<string> = new Set();
  const paths: IParams[] = [];

  await getRemoteExerciseData();
  setStaticDataPath(exercises.exercicios);

  function setStaticDataPath(exercises: IExercise[]): void {
    for (let item of exercises) slugs.add(item.disciplina);
    for (let slug of slugs) paths.push({ params: { slug } });
  }

  return {
    paths,
    fallback: false,
  };
}

async function getRemoteExerciseData(): Promise<void> {
  const remoteData = exercise();

  try {
    await remoteData
      .getData()
      .then((response) => {
        const [bodyData] = response.body;
        exercises.exercicios = bodyData.exercicios;
      })
      .catch((error) => {
        remoteData
          .getMock()
          .then((response) => (exercises.exercicios = response.exercicios));
      });
  } catch (error) {}
}

export default memo(Exercises);
