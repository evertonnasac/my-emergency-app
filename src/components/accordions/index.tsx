import styled from "styled-components";
import {useState} from 'react'

const StyleAccordion = styled.div<{open : boolean}>`
    width: 90%;
    height: ${props => props.open ? "auto" : "50px"};
    transition : all ease-in-out 1s;
`

const StyleControll = styled.div`
    width: 100%;
    height: 50px;
    border: 1px solid ${({theme}) => theme.color.primary};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const StyleTitle = styled.p`
    margin: 0;
    color:  ${({theme}) => theme.color.primary};

`

export const Accordion = ({child, title} : {child : React.ReactNode, title : string}) => {
    const [isOpen, setOpen] = useState(false)
    
    return (
        <StyleAccordion open = {isOpen} >
            <StyleControll>
                <StyleTitle>{title}</StyleTitle>
                <div onClick={() => !isOpen}>x</div>
            </StyleControll>
            {child}
        </StyleAccordion>
    )

}