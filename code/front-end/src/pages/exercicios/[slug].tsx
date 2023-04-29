import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ExeciseContext } from "@/presentation/contexts/exercicios";
import { IExercise } from "@/domain/models/IExercise";
import NavBreadcrumb from "@/presentation/components/breadcrumb";
import Steper from "@/presentation/components/steper";

interface INavItems {
  title: React.ReactNode | string
  href: React.ReactNode | string
};

export default function () {
  const router = useRouter();
  const { pathname } = router
  const { slug } = router.query;
  const { exercicios } = useContext(ExeciseContext);
  const [data, seData] = useState<IExercise[]>([]);
  const [nav,setNav] = useState<INavItems[]>([])
  
  useEffect(() => {
    setNav([
      {
        title: pathname,
        href: pathname
      }, {
        title: slug,
        href: slug
      }])
  }, [slug]);

  useEffect(() => {
    seData(exercicios.filter((item) => item.disciplina === slug));
  }, [exercicios]);


  return (
    <>
      <h2>Exercício - {slug}</h2>
      <NavBreadcrumb items={nav} />
      <Steper data={data} />
    </>
  );
}
