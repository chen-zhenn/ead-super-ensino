import { useRouter } from 'next/router'
import Context from "@/presentation/contexts/exercicios";

export default function () {
    const router = useRouter()
    const { slug } = router.query
    // const { data } = useContext(ExerciciosContext);
    
    return (
        <>
            <h2>Exercício - {slug}</h2>
        </>
    )
}