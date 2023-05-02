import styled from 'styled-components'

const radioBoxSize = {
    default: 14,
    selected: 10,
}
const calc = Calc()

export const Button = styled.span`
    padding: 1rem;
    border-radius: 7px;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(0, 0, 255, 1);
    cursor: pointer;
`
export const RadioBox = styled.span`
    position: relative;
    display: flex;
    margin-right: 1rem;
    padding-left: 2rem;
    cursor: pointer;

    &:before,
    &:after {
        content: "";
        position: absolute;
        display: block;
        top: 50%;
        left: 0;
        width: ${(props:IStepper) => props.size || radioBoxSize.default}px;
        height: ${(props:IStepper) => props.size || radioBoxSize.default}px;
        margin-top: ${(props:IStepper) => calc.half(props.size || radioBoxSize.default) * -1}px;
        margin-right: inherit;
        border-radius: 100%;
        border: solid 1px rgba(128, 128, 128, 1);
    }

    &:after {
        width: ${(props:IStepper) => props.size ? (calc.ProportionalValue(props.size,calc.ratio(radioBoxSize.selected, props.size))) : radioBoxSize.selected }px;
        height: ${(props:IStepper) => props.size ? (calc.ProportionalValue(props.size,calc.ratio(radioBoxSize.selected, props.size))) : radioBoxSize.selected }px;
        border: none;
        transform: translate3d(${(props:IStepper) => {
            const result = calc.diff(radioBoxSize.selected, calc.half(props.size || radioBoxSize.default))
            return `${result}px, ${result}px, 0`
        }});
        background-color: ${(props:IStepper) => props.filled && "rgba(0, 0, 255, 1)"};
    }
`

export const StepContainer = styled.aside`
    position: relative;
    display: flex;
    display: grid;
    grid-auto-flow: column;
` 
export const StepContent = styled.article`
    flex-grow: 1;
    grid-row: 1;
    grid-column: 1;
    visibility: hidden;
    visibility: ${(props:IStepper) => props.visible && "visible" };
`
export const StepSection = styled.section`
    margin-bottom: 1rem;
`
export const StepHeadingGroup = styled.hgroup`
`

export const StepList = styled.ul`
    list-style-type: none;
    margin: unset;
    padding: unset unset unset 0.625rem;
`

export const StepListItem = styled.li`
    display: flex;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    cursor: ${(props:IStepper) => props.clickable && "pointer" };
`

export const StepControls = styled.div`
    grid-row: 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 1rem;
    padding-bottom: 1rem;
`

export const StepControlsContainer = styled.div`
    display: flex;
    flex-grow: 1;
`

export const StepControlsItem = styled(Button)`
    margin-right: 1rem;
` 
interface IStepper {
    clickable?: boolean;
    visible?: boolean;
    filled?: boolean;
    size?: number;
}

interface ICalcUtils {
    diff: (x:number,y:number) => number;
    half: (n:number) => number;
    ratio: (numerator:number, denominator:number) => number;
    propValue: (n:number,ratio:number) => number;
}

function Calc<ICalcUtils>(){

    const diff = (x:number,y:number) => x - y;
    const half = (n:number):number => n * 0.5;
    const ratio = (numerator:number, denominator:number):number => numerator / denominator;
    const ProportionalValue = (n:number,ratio:number) =>  n * ratio;

    return {
        diff, 
        half,
        ratio,
        ProportionalValue
     }
}