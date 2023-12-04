import {StyleForm} from "../../../components/forms"
import {StyleInput} from "../../../components/inputs"
import {StyleSelect} from "../../../components/inputs/select"
import {WrapperGroup, StyleContiner, StyleAddField} from "../styles"
import {UseUser} from "../../../hooks/useUser"
import {StyleButtom} from "../../../components/button/style"
import {Anamnesis} from "../../../types/anamnesis"
import { useForm, useFieldArray} from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useEffect } from "react"


export const Register = () => {

    const nav = useNavigate()
    const {getUser} = UseUser()
    const user = getUser()
        
    useEffect(() => {

        if(!user) {
            nav("/login")
        }
    })

    const schema = z.object({
        illnes : z.array(z.object({
            description: z.string()
        })),
        allergy:z.array(z.object({
            description: z.string()
        })),
        remedys:z.array(z.object({
            description: z.string()
        })),
        medicalTratament: z.array(z.object({
            description: z.string()
        })),
        smoke: z.string(),
        drugs: z.string(),
        beverageAlcholic: z.string(),
        phisicalExercises: z.string(),
    
    })
    
    
    const { register, handleSubmit, setValue, getValues, control } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });
    
    type FormValues = z.infer<typeof schema>;

    const setData = (data :any) => {
        const {setAnamneseUser} = UseUser()
        setAnamneseUser(data)
        nav("/profile")
    }
    
    const { fields: fieldsIllnes, append: appendIllnes } = useFieldArray({
        control,
        name: 'illnes',
      });
    
      const { fields: fieldsAllergy, append: appendAllergy } = useFieldArray({
        control,
        name: 'allergy',
      });
    
      const { fields: fieldsRemedys, append: appendRemedys } = useFieldArray({
        control,
        name: 'remedys',
      });
    
      const { fields: fieldsTratament, append: appendTratament } = useFieldArray({
        control,
        name: 'medicalTratament',
      });
    


    return (
        <StyleContiner>
            <StyleForm $width="100%" onSubmit={handleSubmit(setData)}>
            <WrapperGroup >
                <legend>Patologias</legend>
                <WrapperGroup >
                    <legend>Doenças</legend>
                    {fieldsIllnes.map((field, index) => (
                        <StyleInput type = "text" {...register(`illnes.${index}.description` as const)} key = {field.id}/>
                    ))}
                    <StyleAddField onClick={() => appendIllnes({description: ""})}>Adicionar</StyleAddField>
                </WrapperGroup >
                <WrapperGroup>
                    <legend>Alergias</legend>
                    {fieldsAllergy.map((field, index) => (
                        <StyleInput type = "text" {...register(`allergy.${index}.description` as const)}key = {field.id} />
                    ))}
                    <StyleAddField onClick={() => appendAllergy({description:""})}>Adicionar</StyleAddField>
                </WrapperGroup>
                <WrapperGroup >
                    <legend>Medicamentos</legend>
                    {fieldsRemedys.map((field, index) => (
                        <StyleInput type = "text" {...register(`remedys.${index}.description` as const)} key = {field.id}/>
                    ))}
                    <StyleAddField onClick={() => appendRemedys({description:""})}>Adicionar</StyleAddField>
                </WrapperGroup>
                <WrapperGroup>
                    <legend>Tratamentos</legend>
                    {fieldsTratament.map((field, index) => (
                        <StyleInput type = "text" {...register(`medicalTratament.${index}.description` as const)}key = {field.id} />
                    ))}
                    <StyleAddField onClick={() => appendTratament({description:""})}>Adicionar</StyleAddField>
                </WrapperGroup>
            </WrapperGroup> 

            <WrapperGroup >
                <legend>Social</legend>
                <label htmlFor="smoke">Fumante</label>
                <StyleSelect  {...register("smoke")}>
                    <option value="Sim">SIM</option>
                    <option value="Nao">NAO</option>
                </StyleSelect>
                <label htmlFor="drugs">Usuário de drogas</label>
                <StyleSelect  {...register("drugs")}>
                    <option value="Sim">SIM</option>
                    <option value="Nao">NAO</option>
                </StyleSelect>
                <label htmlFor="beverageAlcholic">Bebida alcólica</label>
                <StyleSelect  {...register("beverageAlcholic")}>
                    <option value="Sim">SIM</option>
                    <option value="Nao">NAO</option>
                </StyleSelect>
                <label htmlFor="phisicalExercise">Atividade física</label>
                <StyleSelect  {...register("phisicalExercises")}>
                    <option value="Sim">SIM</option>
                    <option value="Nao">NAO</option>
                </StyleSelect>
            </WrapperGroup>  
            <StyleButtom type="submit" $width="80%">OK</StyleButtom>
        </StyleForm>
        </StyleContiner>
    
    )
}