import {User} from "../types/user"
import {Anamnesis} from "../types/anamnesis"
// @ts-ignore

export const UseUser = () =>{
    
    const saveUser = (user : User) => {
        localStorage.setItem("userLogon" , JSON.stringify(user))
    }

    const setAnamneseUser = (anamnese : Anamnesis) => {
        let user: User | null = getUser();

        if (user) {
            user.anamnese = anamnese;
            saveUser(user);
        }
    }

    const getIdUser = () => {
        let user: User | null = JSON.parse(localStorage.getItem("userLogon") || 'null');
        if (user){
            return user.id
        }
        return 0
        
    }

    const getUser = () => {
        let user: User | null = JSON.parse(localStorage.getItem("userLogon") || 'null');

        if (user && typeof user === 'object' && 'id' in user) {
            return user as User;
        }

        return null;
    }

    return {saveUser, setAnamneseUser, getIdUser, getUser}
}

