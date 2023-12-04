import styled from "styled-components";

export const StyleButtom = styled.button<{$width : string}>`
    background-color: ${({theme}) => theme.color.primary};
    width: ${props => props.$width};
    color: white;
    height: 46px;
    border: none;
    font-size: 20px;
    font-weight: 500;

`

