import { memo, useEffect, useState } from "react"
import { IExercise } from "@/domain/models/IExercise";
import { message } from "antd";
import { 
    StepContainer, 
    StepContent,
    StepSection,
    StepHeadingGroup,
    StepList,
    StepListItem, 
    StepControls,
    StepControlsContainer, 
    StepControlsItem,
    RadioBox } from "./index.styles";

interface Props {
    data: IExercise[];
}

function Steper({data}:Props){
    const [current, setCurrent] = useState(0);
    const [selected,setSelected] = useState(0);
    const [answered,setAnswered] = useState(false)
    const [choosed,setChoosed] = useState(new Map());

    const handlerAnternative = (id:number) => {
        setSelected(id);
        choosed.set(current, id)
    };

    const handlerAnswer =() => {
        setAnswered(true)
        choosed.set(current, selected)
        setChoosed(new Map(choosed))
    }

    const next = () => {
        setAnswered(false)
        setCurrent(current + 1);
    };
    
    const prev = () => {
        setAnswered(false)
        setCurrent(current - 1);
    };

    useEffect(() => {
    },[data,current])

        
    return(
        <>
            <StepContainer>

                { data.map((item, index) => {
                    return (
                          
                        <StepContent key={index} visible={ current === index  }>
                            <StepHeadingGroup>
                                <h2>{item.tema}</h2>
                                <h3>{item.subtema}</h3>
                            </StepHeadingGroup>

                            {/* Bloco Enunciado */}
                            <StepSection>
                                <StepHeadingGroup>
                                    <h4>{item.questao.enunciado.objetivo}</h4>
                                    <h5>{item.questao.enunciado.titulo}</h5>
                                </StepHeadingGroup>
                                <StepList>
                                    {item.questao.enunciado.opcoes.map((item, index) => {
                                        return (
                                            <StepListItem key={index} clickable={false}>{item.texto}</StepListItem>
                                        )
                                    })}
                                </StepList>
                            </StepSection>
                            
                            {/* Bloco Alternativas */}
                            <StepSection>
                                <StepList>
                                    {item.questao.alternativas.map((value, index) => {
                                        return (
                                            <StepListItem  
                                                key={value.id}
                                                clickable={true}
                                                className={ (answered && value.id === item.questao.resposta) ? 
                                                    "right" : (answered && value.id !== item.questao.resposta) ? "wrong " : "" }
                                                onClick={() => handlerAnternative(value.id)}>
                                                <RadioBox 
                                                    className={`choosed-${choosed.get(current) && value.id  === choosed.get(current) && value.id}`}
                                                    choosedId={ choosed.get(current) && value.id  === choosed.get(current) && value.id}
                                                    // filled={  value.id  === selected } 
                                                    size={14}>{value.letra}.</RadioBox>
                                                <span>{value.texto}</span>
                                            </StepListItem>
                                        )
                                    })}
                                </StepList>
                            </StepSection>

                        </StepContent>
                    )
                }) }

                <StepControls>
                    <StepControlsItem onClick={() => handlerAnswer()}>Verificar Resposta</StepControlsItem>
                    <StepControlsContainer>
                        { current > 0 && <StepControlsItem onClick={() => prev()}>Anterior</StepControlsItem>}
                        { current < (data.length -1) && <StepControlsItem onClick={() => next()}>Próximo</StepControlsItem>}
                    </StepControlsContainer>

                </StepControls>
            </StepContainer>
        </>    
    ) 
}

export default memo(Steper)