
import {StyleContiner, WrapperGroup} from "../styles"
import {StyleForm } from "../../../components/forms"
import {StyleInput, WrepperInput, StyleError} from "../../../components/inputs"
import {StyleSelect} from "../../../components/inputs/select"
import { useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {StyleButtom} from "../../../components/button/style"
import {UseUser} from "../../../hooks/useUser"
//@ts-ignore
import {v4 as uuid} from "uuid"
import * as z from 'zod';
import { useNavigate } from "react-router-dom";


export const RegisterPersonal = () => {

    
    const nav = useNavigate()

    const schema = z.object({
        name: z.string().min(1, "Campo requerido"),
        senha: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
        cpf: z.string().min(11, "CPF inválido").max(11, "CPF inválido"),
        rg: z.string().min(1, "Campo requerido"),
        sexo: z.string(),
        /*altura: z.number(),
        peso: z.number(),*/
        email: z.string().email().min(1, "Campo requerido"),
        telefone: z.string().min(8,"Telefone inválido"),
        rua: z.string().min(2, "Campo requerido"),
        numero: z.string().min(1, "Campo requerido"),
        cidade: z.string().min(2, "Campo requerido"),
        estado: z.string().min(2, "Campo requerido"),
        pais: z.string().min(2, "Campo requerido"),
    })

    type FormValues = z.infer<typeof schema>;

    const {handleSubmit, register, formState : {errors}} = useForm<FormValues>({
        resolver: zodResolver(schema)
    })

    const setData = (data: any) => {
        data.id = uuid()
        const {saveUser} = UseUser()
        saveUser(data)
        nav("anamnese")

    }

    return(
        <StyleContiner>
            <StyleForm $width="100%" onSubmit={handleSubmit(setData)}>
                <WrapperGroup>
                    <legend>Informações de login</legend>
                    <WrepperInput $width="100%">
                        <label htmlFor="email">Email</label>
                        <StyleInput type="text" {...register("email")} placeholder="Digite o email"/>
                        <StyleError>{errors.email && errors.email.message}</StyleError>
                    </WrepperInput>
                    <WrepperInput $width="100%">
                        <label htmlFor="senha">Senha</label>
                        <StyleInput type="password" {...register("senha")} placeholder="Digite a senha" />
                        <StyleError>{errors.senha && errors.senha.message}</StyleError>
                    </WrepperInput>
                </WrapperGroup>
                <WrapperGroup>
                    <legend>Informações Pessoais</legend>
                    <WrepperInput $width="100%">
                        <label htmlFor="name">Nome</label>
                        <StyleInput type="text" {...register("name")} placeholder="Digite seu nome"/>
                        <StyleError>{errors.name && errors.name.message}</StyleError>
                    </WrepperInput>
                    <WrepperInput $width="100%">
                        <label htmlFor="cpf">CPF</label>
                        <StyleInput type="text" {...register("cpf")} placeholder="Digite seu CPF" />
                        <StyleError>{errors.cpf && errors.cpf.message}</StyleError>
                    </WrepperInput>
                    <WrepperInput $width="100%">
                        <label htmlFor="rg">RG</label>
                        <StyleInput type="text" {...register("rg")} placeholder="Digite seu RG"/>
                        <StyleError>{errors.rg && errors.rg.message}</StyleError>
                    </WrepperInput>
                    <WrepperInput $width="100%">
                        <label htmlFor="telefone">Telefone</label>
                        <StyleInput type="text" {...register("telefone")} placeholder="Digite seu Telefone" />
                        <StyleError>{errors.telefone && errors.telefone.message}</StyleError>
                    </WrepperInput>
                    <label htmlFor="sexo">Sexo</label>
                    <StyleSelect {...register("sexo")} >
                        <option value={"Feminino"}>Feminino</option>
                        <option  value={"Masculino"}>Masculino</option>
                    </StyleSelect>
                </WrapperGroup>
                <WrapperGroup>
                    <legend>Enedereço</legend>
                    <WrepperInput $width="100%">
                        <label htmlFor="rua">Rua</label>
                        <StyleInput type="text" {...register("rua")} placeholder="Digite o nome da rua"/>
                        <StyleError>{errors.rua && errors.rua.message}</StyleError>
                    </WrepperInput>
                    <WrepperInput $width="100%">
                        <label htmlFor="numero">Número</label>
                        <StyleInput type="number" {...register("numero")} placeholder="Digite o numero da residência"/>
                        <StyleError>{errors.numero && errors.numero.message}</StyleError>
                    </WrepperInput>
                    <WrepperInput $width="100%">
                        <label htmlFor="cidade">Cidade</label>
                        <StyleInput type="text" {...register("cidade")} placeholder="informe a cidade"/>
                        <StyleError>{errors.cidade && errors.cidade.message}</StyleError>
                    </WrepperInput>
                    <WrepperInput $width="100%">
                        <label htmlFor="estado">Estado</label>
                        <StyleInput type="text" {...register("estado")} placeholder="Informe o estado" />
                        <StyleError>{errors.estado && errors.estado.message}</StyleError>
                    </WrepperInput>
                    <WrepperInput $width="100%">
                        <label htmlFor="pais">Pais</label>
                        <StyleInput type="text" {...register("pais")} placeholder="informe o país"/>
                        <StyleError>{errors.pais && errors.pais.message}</StyleError>
                    </WrepperInput>
                </WrapperGroup>
                <StyleButtom type="submit" $width="80%">OK</StyleButtom>
            </StyleForm>
        </StyleContiner>
    )
}