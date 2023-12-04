import {ReactNode, createContext, useState} from "react"


type ContextType = {
    open : boolean,
    toggleMenu : () => void
}

export const MenuContext = createContext<ContextType>({open: false, toggleMenu : () => {}})

export const ContextMenu = ({children} : {children : ReactNode}) => {

    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        console.log(open)
        setOpen(!open)
    }
    return(
        <MenuContext.Provider value = {{open, toggleMenu}}>
            {children}
        </MenuContext.Provider>
    )
}