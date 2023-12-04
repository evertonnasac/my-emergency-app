import styled from "styled-components";


export const StyleLabel = styled.label`
    display: flex;
    gap: 2px;
    align-items: center;
`

export const StyleBox = styled.div<{$checked: boolean}>`
    width: 25px;
    height: 25px;
    border: 1px solid ${props=> props.$checked == false? props.theme.color.primary : props.theme.color.gray};
    background-color : ${props=> props.$checked == false ? props.theme.color.gray : props.theme.color.primary};
`

