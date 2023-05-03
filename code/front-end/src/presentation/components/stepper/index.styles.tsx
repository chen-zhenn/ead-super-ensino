import styled from 'styled-components'

const colors = {
    bg: "rgba(248, 250, 252, 1)",
    light: "rgba(255, 255, 255, 1)",
    grey: "rgba(239, 239, 237, 1)",
    dark: "rgba(228, 228, 226, 1)",
    mid: "rgba(206, 206, 204, 1)",
    featured: "rgba(65, 130, 242, 1)",
    featuredPrimary: "rgba(48, 156, 219, 1)",
    featuredSecondary: "rgba(55, 229, 249, 1)",
}

const breakpoints = {
    small: '480px',
    medium: '768px',
    large: '992px',
    xlarge: '1200px',
  }

const radioBoxSize = {
    default: 14,
    selected: 10,
}
const calc = Calc()

export const Button = styled.span`
    padding: 1rem;
    border-radius: 7px;
    color: ${colors.light};
    background-color: ${colors.featured};
    cursor: pointer;
    transition: background-color .5s ease;

    &:hover {
        background-color: ${colors.featuredSecondary}; 
    }
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
        border: solid 1px ${colors.mid};
    }

    &:after {
        width: ${(props:IStepper) => props.size ? (calc.ProportionalValue(props.size,calc.ratio(radioBoxSize.selected, props.size))) : radioBoxSize.selected }px;
        height: ${(props:IStepper) => props.size ? (calc.ProportionalValue(props.size,calc.ratio(radioBoxSize.selected, props.size))) : radioBoxSize.selected }px;
        border: none;
        transform: translate3d(${(props:IStepper) => {
            const result = calc.diff(radioBoxSize.selected, calc.half(props.size || radioBoxSize.default))
            return `${result}px, ${result}px, 0`
        }});
        background-color: ${(props:IStepper) => props.filled && colors.featured};
    }

    &.choosed-${(props:IStepper) => props.choosedId}:after{
        background-color: ${colors.featured};
    }
`
export const StepUlList = styled.ul`
    list-style-type: none;
    margin: unset;
    padding: unset;
`

export const StepWrapper = styled.div`
`

export const StepHeader = styled.header``

export const StepContainer = styled.aside`
    position: relative;
    display: ${(props:IStepper) => props.steps && "flex"};
    display: ${(props:IStepper) => props.steps && "grid"};
    grid-auto-flow: column;
`
export const StepProgress = styled.aside`
    display: grid;
`

export const StepProgressBar = styled.div`
    grid-row: 1;
    grid-column: 1;
    align-self: center;
    width: 100%;
    height: 3px;
    background-color: ${colors.featured};
    transform-origin: top left;
    transform: scaleX(0);
    transition: transform .16s ease-in-out; 
    visibility: hidden;
    z-index: -3;

    @media(min-width: ${breakpoints.large}) {
        transform: scaleX(${(props:IStepper) => props.perc});
        visibility: visible;
    }
`

export const StepProgressList = styled(StepUlList)`
    grid-row: 1;
    grid-column: 1;
    display: flex;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    z-index: 5;
`

export const StepProgressItem = styled.li`
    display: flex;
    align-items: center;
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
`

export const StepProgressMarker = styled.span`
    overflow: hidden;
    position: relative;
    justify-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin-right: 0.625rem;
    border: ${(props:IStepper) => props.done && `solid 1px ${colors.featured}`};
    border-radius: 50%;
    font-weight: 700;
    color: ${(props:IStepper) => props.done ? colors.light : colors.dark};

    &:before,
    &:after {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        color: inherit;
        transition: transform 0.5s ease-in-out, background-color 0.75s ease-in-out;
        z-index: -1;
    }

    &:before {
        background-color: ${(props:IStepper) => props.done ? colors.featured : colors.grey};
        transform: ${(props:IStepper) => props.done ? "scale(0)" : "scale(.75)"};
    }

    &:after {
        background-color: ${(props:IStepper) => props.done ? colors.featured : colors.grey};
        transform: ${(props:IStepper) => props.done ? "scale(.75)" : "scale(0)"};
    }
`

export const StepProgressLabel = styled.span`
    padding-right: 0.625rem;
    padding-left: 0.625rem;
    font-size: 1.25rem;
    font-weight: 500;
    background-color: ${colors.light};
    color: ${(props:IStepper) => props.done ? colors.featured : colors.grey};
`

export const StepContent = styled.article`
    flex-grow: 1;
    grid-row: 1;
    grid-column: 1;
    padding-right: 1.875rem;
    padding-left: 1.875rem;
    background-color: ${colors.bg};
    visibility: hidden;
    visibility: ${(props:IStepper) => props.visible && "visible" };
`
export const StepSection = styled.section`
    margin-bottom: 1rem;
`
export const StepHeadingGroup = styled.hgroup`
`

export const StepList = styled(StepUlList)`
    padding: unset unset unset 0.625rem;
`

export const StepListItem = styled.li`
    display: flex;
    margin-bottom: 0.25rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    cursor: ${(props:IStepper) => props.clickable && "pointer" };

    &.right {
        background-color: rgba(0, 255, 0, .33);
    }

    &.wrong {
        background-color: rgba(255, 0, 0, .33);
    }
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
    color: ${(props:IStepper) => props.disabled && colors.mid};
    background-color: ${(props:IStepper) => props.disabled && colors.grey};
    pointer-events: ${(props:IStepper) => props.disabled && "none"};
` 
interface IStepper {
    clickable?: boolean;
    visible?: boolean;
    filled?: boolean;
    disabled?: boolean;
    right?: boolean;
    wrong?: boolean;
    done?: boolean;
    steps?: boolean;
    size?: number;
    choosedId?: number;
    perc?: number;
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