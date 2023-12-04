import styled from "styled-components";

export const StyleForm = styled.form<{$width: string}>` 
    width: ${props => props.$width};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;


`