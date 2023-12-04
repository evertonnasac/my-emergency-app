import {StyleLabel, StyleBox} from "./style"
import {useState} from "react"

type PropsCheck = {
    $name: string,
    onChange?: (value: string, checked : boolean ) => void,
    group?: string,
    register? : any

}


export const Check = ({$name, onChange, group, register} : PropsCheck) => {
    
    const [checked, setChecked] = useState(false)

    const handleCheck = (name: string) => {
        onChange  && onChange(name, !checked)
        setChecked(!checked)
    }

    return (
        <StyleLabel htmlFor={$name}>
            <StyleBox $checked = {checked}/>
            <input type="checkbox" name={$name} id={$name} hidden 
                    onChange={(e)=>handleCheck($name)} />
            {$name}
        </StyleLabel>
    )
}