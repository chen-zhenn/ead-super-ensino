import { GetStaticPropsContext, GetStaticPathsContext } from "next";
import { useRouter } from "next/router";
import { memo, useContext, useEffect, useState } from "react";
import { makeExercise as exercise } from "@/main/factories/exercises/ExerciseFactory";
import { ExeciseContext } from "@/presentation/contexts/exercicios";
import { IExercise } from "@/domain/models/IExercise";
import NavBreadcrumb from "@/presentation/components/breadcrumb";
import Stepper from "@/presentation/components/stepper";
import exercicios from ".";
interface IExerciseData {
  _id: string;
  exercicios: IExercise[];
}
interface INavItems {
  title: React.ReactNode | string;
  href: React.ReactNode | string;
}

const exercises: IExerciseData = {
  exercicios: [],
  _id: "",
};
interface Props {
  exercises: IExerciseData;
}

function Exercises({ exercises }: Props) {
  const router = useRouter();
  const { pathname } = router;
  const { slug } = router.query;
  const { exercicios } = useContext(ExeciseContext) || exercises;
  const [data, seData] = useState<IExercise[]>([]);
  const [nav, setNav] = useState<INavItems[]>([]);

  useEffect(() => {
    setNav([
      {
        title: pathname,
        href: pathname,
      },
      {
        title: slug,
        href: slug,
      },
    ]);
  }, [pathname, slug]);

  useEffect(() => {
    seData(exercicios.filter((item) => item.disciplina === slug));
  }, [exercicios, slug]);

  return (
    <>
      <h2>Exercício - {slug}</h2>
      <NavBreadcrumb items={nav} />
      <Stepper data={data} />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {

  return {
    props: { exercises },
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
  const data = await getRemoteExerciseData();

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
