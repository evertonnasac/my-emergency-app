import {StyleMenu, StyleOptions} from "./style"
import {MenuContext} from "../../context/menuContext"
import {HeaderContext} from "../../context/headerContext"
import {useContext} from "react"
import {useNavigate} from "react-router-dom"


export const Menu = () => {

    const {open, toggleMenu} = useContext(MenuContext)
    const {toggleTitle} = useContext(HeaderContext)

    const nav = useNavigate()

    const handleClick = (path: string, title:string) => {
        toggleMenu()
        toggleTitle(title)
        nav(path)
    }

    return (
        <StyleMenu $visible = {open}>
            <StyleOptions onClick={() => handleClick("/map", "AJUDA")}>AJUDA</StyleOptions>
            <StyleOptions onClick={() => handleClick("/profile", "FICHA MÉDICA")}>HOME</StyleOptions>
            <StyleOptions onClick={() => handleClick("/", "")}>SAIR</StyleOptions>
        </StyleMenu>
    )
}