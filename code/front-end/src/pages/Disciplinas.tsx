import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Context from "@/presentation/contexts/exercicios";

export default function Disciplinas() {
  const { exercicios } = useContext(Context);
  const [disciplina, setDisciplina] = useState<Set<string>>(new Set());

  useEffect(() => {
    const dataSet = new Set(disciplina);
    for (let item of exercicios) setDisciplina(dataSet.add(item.disciplina))
  }, [exercicios]);

  return (
    <>
      <h2>Pagina de Disciplinas</h2>
      <ul>
        {Array.from(disciplina).map((item,index) => (
          <li key={index}>
            <Link href={`/exercicios/${item}`} passHref>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
