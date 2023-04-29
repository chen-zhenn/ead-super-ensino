import Link from "next/link";
import { Card } from "antd";
import { memo, useContext, useEffect, useState } from "react";
import { ExeciseContext } from "@/presentation/contexts/exercicios";

function Disciplinas() {
  const { exercicios } = useContext(ExeciseContext);
  const [disciplina, setDisciplina] = useState<Set<string>>(new Set());

  useEffect(() => {
    const dataSet = new Set(disciplina);
    for (let item of exercicios) setDisciplina(dataSet.add(item.disciplina))
  }, [exercicios]);

  return (
    <>
      <h1 style={{
        alignSelf: 'flex-start',
        marginLeft:'unset', 
        paddingLeft:'unset'}}>Disciplinas</h1>
      <ul style={{
        display:'flex', 
        flexWrap:'wrap',
        listStyleType:'none'}}>
        {Array.from(disciplina).map((item,index) => (
          <li key={index} style={{marginRight:'1.5rem'}}>
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

export default memo(Disciplinas)
