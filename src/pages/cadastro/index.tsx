import {StyleContiner, WrapperGroup, WrepperCheck} from "./styles"
import {StyleForm} from "../../components/forms"
import {Input} from "../../components/inputs"
import {pathology} from "../../data/doencas"
import {Check} from "../../components/checks"
import {Anamnesis} from "../../types/anamnesis"
import {reducerPatology, ActionsPatology} from "./reducer"
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState, useReducer } from "react"

export const Register = () => {

    /*
    const schema = z.object({
        illnes : z.array(z.string()),
        /*allergy: z.array(z.string()),
        remedys: z.array(z.string()),
        medicalTratament: z.array(z.string()),
        bloodType: z.string()
    })

    const { register, handleSubmit, setValue, getValues } = useForm({
        resolver: zodResolver(schema),
      });

    const hanndleCheckbox = (field : string, value: string ) =>{
        let values = getValues("illnes")
        console.log(values)

        if(values.includes(value)){
            setValue(field, values.filter((d : string) => d !== value));
        } 
        else {
            setValue(field, [...values, value]);
        }

    }

    const onSubmit = (data: any) => {
        console.log(data)
    } 

 */


    const initialState : Anamnesis = {
        patology: {
            illness: [],
            allergy: [],
            remedys: [],
            medicalTratament: [],
            bloodType: "",
        },
        social: {
            smoke: "N",
            drugs: "N",
            beverageAlcholic: "N",
            phisicalExercises: "N",
        },
        familyHistory: [],
    };
      
    const [anamnesis, dispatch] = useReducer(reducerPatology, initialState);

    const handleIllnes =  (value :string, checked:boolean) =>{
        if(!checked){
            dispatch({type:"removeIllness", illness : value})
            return
        }
        dispatch({type: "addIllness", illness : value })
        
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        console.log(anamnesis)
    }

    return(
        <StyleContiner>
            <StyleForm $width="90%" onSubmit={handleSubmit}>
                <WrapperGroup>
                    <legend >Doenças</legend>
                    <WrepperCheck>
                        {pathology.map((p, index) => {
                            return (
                                <Check $name={p} key={index} onChange={handleIllnes}/>
                            )
                        })}
                        </WrepperCheck>
                    
                    <Input
                        $label="Outras doenças"                
                        $type="text"
                        $name="doencas"
                        $width="95%"
                        error=""
                        $value={anamnesis.patology[anamnesis.patology.length - 1]}
                        $onChange={handleIllnes}
                    />
               
                </WrapperGroup>
                <input type="submit" value="ok" />
            </StyleForm>
        </StyleContiner>
    )

}