import styled from "styled-components";
import img from "/images/img_login.png"
import icon_email from "/images/icon_email.png"
import icon_goole from "/images/icon_google.png"
import icon_face from "/images/icon_face.png"
import {useNavigate} from "react-router-dom"


export const StyleContaner = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${img});
    background-size: contain;
    background-repeat: no-repeat;
    background-position : center;
    position: absolute;
    top: 0;
    
`

const WrepperInput = styled.div`
    width: 80%;
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 20px;

`



const StyleOptionLogin = styled.div<{type: "google" | "face" | "email"}>`
    width: 100%;
    display: flex;
    align-items: center;
    height: 45px;
    color: white;
    gap: 20px;
    font-size: 20px;
    font-weight: 400;
    background-color: ${props => props.type == "google" ? props.theme.color.primary 
                        : props.type == "face" ? "#39599B" : "#EA4335"};
`

const StyleText = styled.p`
    color: white;
    font-size: 20px;
    font-weight: bold;
    background-color:  ${props =>  props.theme.color.primary };
    width: 150px;
    text-align: center;
    padding: 5px;
`

export const Login = () => {

    const nav = useNavigate()


    return (
        <StyleContaner>
            <WrepperInput>
                <StyleOptionLogin  type="email" onClick={() => nav("/profile")}>
                    <img src={icon_email} alt="Incone email" />
                    Fazer login com email
                </StyleOptionLogin>
                <StyleOptionLogin type="face" onClick={() => nav("/profile")}>
                    <img src={icon_face} alt="Incone Facebook" />
                    Fazer login com facebook
                </StyleOptionLogin>
                <StyleOptionLogin type="google" onClick={() => nav("/profile")}>
                    <img src={icon_goole} alt="Incone google" />  
                    Fazer login com google
                </StyleOptionLogin>
                <StyleText onClick={() => nav("/personal")}>CRIAR CONTA</StyleText>
            </WrepperInput>
        </StyleContaner>
    )
}