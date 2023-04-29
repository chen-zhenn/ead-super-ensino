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
            {
                loading ? 'carregando...' : 
                <>
                    <Steps current={current} items={data.map(item => ({ key: item.tema, title: item.tema }))} />
                    
                    <div style={contentStyle}>{
                        <>
                            <hgroup>
                                <h4 style={{lineHeight:'initial'}}>{data[current].subtema}</h4>
                                <h3 style={{lineHeight:'initial'}}>{data[current].questao.enunciado.objetivo}</h3>
                                <h4 style={{lineHeight:'initial'}}>
                                    {data[current].questao.enunciado.titulo.replace(".", ":")}
                                </h4>
                            </hgroup>
                            <ul style={{listStyleType:'none', marginLeft:'unset', paddingLeft:'unset'}}>
                                {data[current].questao.enunciado.opcoes
                                    .map((item,index) => <li 
                                    key={index} 
                                    style={{lineHeight:'1.5rem'}}>{item.texto}</li>)
                                }
                            </ul>
                            <ul style={{listStyleType:'none', marginLeft:'unset', paddingLeft:'unset'}}>
                                {data[current].questao.alternativas
                                    .map(item => <li 
                                    key={item.id} 
                                    style={{display:'flex', alignItems:'center', lineHeight:'1.5rem'}}>
                                        <Checkbox onChange={onChange}>
                                            <b>{item.letra}</b>
                                        </Checkbox>
                                        <p style={{display:'inline-block', marginLeft:'0.65rem'}}>{item.texto}</p>
                                    </li>)
                                }
                            </ul>
                        </>

                    }</div>
                    
                    <div style={{ marginTop: 24, textAlign:'center' }}>
                        {current > 0 && (
                            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                Previous
                            </Button>
                        )}
                        {current < data.length - 1 && (
                            <Button type="primary" onClick={() => next()}>
                                Next
                            </Button>
                        )}
                        {current === data.length - 1 && (
                            <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                Done
                            </Button>
                        )}
                    </div>
                </> 
            }
        </>    
    ) 
}

export default memo(Steper)