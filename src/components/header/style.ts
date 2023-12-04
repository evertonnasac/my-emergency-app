import styled from "styled-components";

export const Container = styled.header`
    height : 10vh;
    width: 98.5vw;
    display: flex;
    gap:35px;
    align-items: center;
    overflow: hidden;
    background-color: ${({theme})=>theme.color.primary};
    color: white;
    font-weight: 500;
    font-size: 22px;

`
