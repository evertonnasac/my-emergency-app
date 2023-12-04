import styled from "styled-components"

export const Title = styled.p`
    font-size: 20px;
    color :  ${({theme})=>theme.color.primary};
    font-weight: 400;
`

export const SubTitle = styled.p`
    font-size: 24px;
    font-weight: bold;
    background-color:${({theme})=>theme.color.primary} ;
    color: white;
    padding: 5px 0;
`
export const StyleGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`