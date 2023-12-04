import {Container} from "./style"
import { MdOutlineMenu } from "react-icons/md";
import {MenuContext} from "../../context/menuContext"
import {HeaderContext} from "../../context/headerContext"
import { useContext } from "react";


export const Header = () => {

    const {toggleMenu} = useContext(MenuContext)
    const {title} = useContext(HeaderContext)

    return (
        <Container>
            < div onClick={toggleMenu}>
                <MdOutlineMenu size = "50"  color="white"/>
            </div>
            {title}
        </Container>
    )
}