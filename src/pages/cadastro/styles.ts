import styled from "styled-components";


export const StyleContiner = styled.div`
    width: 100%;
`
    

export const WrepperCheck = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`

export const WrapperGroup = styled.fieldset`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-color: ${({theme})=>theme.color.primary};
    box-sizing: border-box;
    padding: 10px;
 

    legend{
        color :  ${({theme})=>theme.color.primary};
        font-size: 18px;
        font-weight: bold;
    }

    label{
        color :  ${({theme})=>theme.color.primary};
        font-size: 16px;
    }
`

export const StyleAddField = styled.p`
    font-size: 16px;
    color :  ${({theme})=>theme.color.primary};
    font-weight: 400;
`

