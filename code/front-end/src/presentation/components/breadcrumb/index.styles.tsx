import styled from "styled-components"

const sizes = {
    spacing: {
        small: '0.625rem',
        medium: '1.875rem'
    },
    font: {
        small: '0.9375rem',
    }
}

const spacing = {
    'mbm': `margin-bottom: ${sizes.spacing.medium}`,
    'pls': `padding-left: ${sizes.spacing.small}`
}

export const List = styled.ul`
    list-style-type: none;
    margin: unset;
    padding: unset;
`

export const BreadWrapper = styled.aside`
    position: relative;
    ${spacing.mbm};
    ${spacing.pls}
`

export const BreadIList = styled(List)`
    display: flex;
    font-size: ${sizes.font.small};
    color: rgba(0, 0, 0, .45);
`

export const BreadItem = styled.li`
    margin-right: 0.625rem; 
    color: inherit;
`