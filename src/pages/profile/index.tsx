import {SubTitle, Title, StyleGroup} from "./styles"
import {StyleContiner} from "../cadastro/styles"
import {UseUser} from "../../hooks/useUser"
import {Anamnesis} from "../../types/anamnesis"

export const Profile = () => {
    const {getUser} = UseUser()
    const user = getUser()

    return (
        <StyleContiner>
            <Title>
                {user?.name}
            </Title>
            <SubTitle>Patologias</SubTitle>
            <StyleGroup>
                {user?.anamnese  && 'illness' in user.anamnese && Array.isArray(user.anamnese.illness) ?  (
                   user.anamnese.illness.map((name) => {
                   return (<p>{name}</p>)})
                ) : "" }
            </StyleGroup>
            <SubTitle>Alergias</SubTitle>
            <StyleGroup>
                {user?.anamnese  && 'allergy' in user.anamnese && Array.isArray(user.anamnese.allergy) ?  (
                   user.anamnese.allergy.map((name) => {
                    return (<p>{name}</p>)})
                ) : "" }
            </StyleGroup>
            <SubTitle>Tratamentos</SubTitle>
            <StyleGroup>
                {user?.anamnese  && 'medicalTratament' in user.anamnese && Array.isArray(user.anamnese.medicalTratament) ?  (
                   user.anamnese.medicalTratament.map((name) => {
                    return (<p>{name}</p>)})
                ) : "" }
            </StyleGroup>
        </StyleContiner>
    )
}