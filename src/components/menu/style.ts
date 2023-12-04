import styled from "styled-components";

export const StyleMenu = styled.nav<{$visible : boolean}>`
    width: 40vw;
    height: 90vh;
    position: absolute;
    transition: left all 10ms;
    display: flex;
    flex-direction: column;
    bottom: 0;
    z-index: 10000;
    background-color: ${({theme}) => theme.color.primary};
    padding-left: 20px;
    left: ${props => props.$visible == true ? "0" : "-50vw"};
`

export const StyleOptions = styled.p`
    color : white ;
    font-size: 22px;
    font-weight: 400;
`