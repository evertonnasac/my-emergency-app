import {ReactNode, createContext, useState} from "react"


type ContextType = {
    title : string,
    toggleTitle : (text: string) => void
}

export const HeaderContext = createContext<ContextType>({title: "", toggleTitle : () => {}})

export const ContextHeader = ({children} : {children : ReactNode}) => {

    const [title, setTitle] = useState("")

    const toggleTitle = (text: string) => {
       // console.log(open)
        setTitle(text)
    }
    return(
        <HeaderContext.Provider value = {{title, toggleTitle}}>
            {children}
        </HeaderContext.Provider>
    )
}