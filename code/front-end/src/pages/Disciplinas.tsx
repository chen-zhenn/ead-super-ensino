import Link from "next/link";
import { useContext } from "react";
import Context from "@/presentation/contexts/exercicios";
import { IExercise } from "@/domain/models/IExercise";

export default function Disciplinas() {
  const { exercicios } = useContext(Context);
  return (
    <>
      <h2>Pagina de Disciplinas</h2>
      <ul>
        {exercicios.map((item: IExercise ) => (
          <li>
            <Link href={`/exercicios/${item.disciplina}`} passHref>
              {item.disciplina}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
