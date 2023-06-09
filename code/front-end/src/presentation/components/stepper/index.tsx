import { memo, useState } from "react"
import { IExercise } from "@/domain/models/IExercise";
import {
    StepWrapper,
    StepHeader, 
    StepContainer,
    StepProgress,
    StepProgressBar,
    StepProgressList,
    StepProgressItem,
    StepProgressMarker,
    StepProgressLabel,
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
        setSelected(0);
    };
    
    const prev = () => {
        setAnswered(false)
        setCurrent(current - 1);
        setSelected(0);
    };
        
    return(

        <StepWrapper>

            <StepHeader>
                <StepProgress>
                    <StepProgressBar perc={(current/data.length)}/>
                    <StepProgressList>
                        { data.map((item, index) => {
                            return (
                                <StepProgressItem key={index}>
                                    <StepProgressMarker done={current >= index }>{index+1}</StepProgressMarker>
                                    <StepProgressLabel done={current >= index }>{item.tema}</StepProgressLabel>
                                </StepProgressItem>
                            )
                        }) }
                    </StepProgressList>
                </StepProgress>
            </StepHeader>

            <StepContainer steps={true}>

                { data.map((item, index) => {
                    return (
                          
                        <StepContent key={index} visible={ current === index  }>
                            <StepHeadingGroup>
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
                                                    className={choosed.get(current) && value.id  === choosed.get(current) && `choosed-${value.id}`}
                                                    choosedId={choosed.get(current) && value.id  === choosed.get(current) && value.id}
                                                    filled={  value.id  === selected } 
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
                    <StepControlsItem disabled={!selected && !choosed.get(current)} onClick={() => handlerAnswer()}>Verificar Resposta</StepControlsItem>
                    <StepControlsContainer>
                        { current > 0 && <StepControlsItem disabled={!selected && !choosed.get(current)} onClick={() => prev()}>Anterior</StepControlsItem>}
                        { current < (data.length -1) && <StepControlsItem disabled={!selected && !choosed.get(current)} onClick={() => next()}>Próximo</StepControlsItem>}
                    </StepControlsContainer>

                </StepControls>
            </StepContainer>
        </StepWrapper>    
    ) 
}

export default memo(Steper)