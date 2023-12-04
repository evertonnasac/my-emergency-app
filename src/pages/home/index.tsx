import styled from "styled-components";


const StylePanel = styled.nav`
    width: 85%;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center ;
   

`
const StyleOption = styled.div`
    width : 100%;
    height: 15%;
    background-color: ${({theme}) => theme.color.primary};
    color: white;
    font-size: 28px;
    font-weight: bold;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    justify-content: space-evenly;
    align-items: center ;

`

export const Nav = () => {
    return(
        <StylePanel>
            <StyleOption>Chamada de Emergência</StyleOption>
            <StyleOption>Meus dados</StyleOption>
            <StyleOption>Logout</StyleOption>
        </StylePanel>
    )
}





