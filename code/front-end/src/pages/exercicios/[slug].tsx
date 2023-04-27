import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from "react";
import Context from "@/presentation/contexts/exercicios";
import { IExercise } from '@/domain/models/IExercise';

export default function () {
    const { exercicios } = useContext(Context);
    const [data, seData] = useState<IExercise[]>([])
    const router = useRouter()
    const { slug } = router.query

    useEffect(() => {
        seData(exercicios.filter(item => item.disciplina === slug))
    },[exercicios])
    
    return (
        <>
            <h2>Exercício - {slug}</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        {item.tema}
                    </li>
                ))}
            </ul>
        </>
    )
}