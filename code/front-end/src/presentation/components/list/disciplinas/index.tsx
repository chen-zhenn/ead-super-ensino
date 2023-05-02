import Link from "next/link";
import { Card } from "antd";
import { memo, useContext, useEffect, useState } from "react";
import { IExercise } from "@/domain/models/IExercise";
import { ExeciseContext } from "@/presentation/contexts/exercicios";

interface IExerciseData {
  _id: string;
  exercicios: IExercise[];
}

interface Props {
  exercises: IExerciseData;
}

function Disciplinas({ exercises }: Props) {
  const { exercicios } = useContext(ExeciseContext);
  const [disciplinas, setDisciplinas] = useState<Set<string>>(new Set());
  const [data, setData] = useState<IExerciseData>(exercises);

  useEffect(() => {
    setData(exercises);
  },[exercises])

  useEffect(() => {
    setDataDisciplinaData(data.exercicios);
  },[data])

  useEffect(() => {
    setDataDisciplinaData(exercicios);
  }, [exercicios]);

  function setDataDisciplinaData(list: IExercise[]) {
    const dataSet = new Set(disciplinas);
    for (let item of list) setDisciplinas(dataSet.add(item.disciplina));
  }

  return (
    <>
      <h1
        style={{
          alignSelf: "flex-start",
          marginLeft: "unset",
          paddingLeft: "unset",
        }}
      >
        Disciplinas
      </h1>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          listStyleType: "none",
        }}
      >
        {Array.from(disciplinas).map((item, index) => (
          <li key={index} style={{ marginRight: "1.5rem" }}>
            <Link href={`/exercicios/${item}`} passHref>
              <Card title="Exercícios" bordered={true}>
                <h3>{item}</h3>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default memo(Disciplinas);
