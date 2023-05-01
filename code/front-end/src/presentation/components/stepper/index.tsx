import { memo, useEffect, useState } from "react"
import { message, Steps, theme, Button, Checkbox, StepProps } from "antd";
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { IExercise } from "@/domain/models/IExercise";

interface Props {
    data: IExercise[];
}

function Steper({data}:Props){
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const [loading,setLoading] = useState(true)

    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
        console.log(`value = ${e.target.value}`)
    };

    const next = () => {
        setCurrent(current + 1);
    };
    
    const prev = () => {
        setCurrent(current - 1);
    };

    useEffect(() => {
        if(data && data.length) setLoading(false)
    },[data,current])

    
    const contentStyle: React.CSSProperties = {
        lineHeight: "initial",
        textAlign: "left",
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
        paddingLeft: '1rem'
    };
    
    return(
        <>
            <h2>Steper...</h2>
            <aside>
                { data.map(item => {
                    return (
                        <>  
                            {/* Bloco Steper by tema */}
                            <section key={item.tema} style={{ borderBottom:'solid 1px rgba(128,128,128,1)'}}>
                                <h2>{item.tema}</h2>
                                <h3>{item.subtema}</h3>
                                {/* Bloco Enunciado */}
                                <section>
                                    <hgroup>
                                        <h4>{item.questao.enunciado.objetivo}</h4>
                                        <h5>{item.questao.enunciado.titulo}</h5>
                                    </hgroup>
                                    <div>
                                        <ul>
                                            {item.questao.enunciado.opcoes.map(item => {
                                                return (
                                                    <li>{item.texto}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </section>
                                {/* Bloco Alternativas */}
                                <section>
                                    <div>
                                        <ul>
                                            {item.questao.alternativas.map(item => {
                                                return (
                                                    <li>
                                                        <Checkbox value={item.id} onChange={onChange}>
                                                            <span>{item.letra} </span>
                                                        </Checkbox>
                                                        <span>{item.texto}</span>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </section>
                            </section>
                        </>
                    )
                }) }
            </aside>
        </>    
    ) 
}

export default memo(Steper)