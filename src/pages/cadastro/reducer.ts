import {Anamnesis} from "../../types/anamnesis"

export type ActionsPatology = 
| { type: "addIllness"; illness: string }
| { type: "removeIllness"; illness: string }
| { type: "addRemedy"; remedy: string }
| { type: "addmedicalTratament"; tratament: string }
| { type: "addallergy"; allergy: string }
| { type: "addbloodType"; bloodType: string }
| { type: "addsmoke"; smoke: "S" | "N" }
| { type: "adddrugs"; drugs: "S" | "N" }
| { type: "addbeverageAlcholic"; beverageAlcholic: "S" | "N" }
| { type: "addphisicalExercises"; phisicalExercises: "S" | "N" }

export const reducerPatology = (state: any, action: ActionsPatology )  =>{
    switch (action.type) {
        case "addIllness":
        return {
            ...state,
            patology: {
            ...state.patology,
            illness: [...state.patology.illness, action.illness],
            },
        };
        case "removeIllness":
        let newIllnes = [...state.patology.illness]
        newIllnes = newIllnes.filter(i => i != action.illness)
        return {
            ...state,
            patology: {
            ...state.patology,
            illness: [...newIllnes],
            },
        };
        case "addRemedy":
        return {
            ...state,
            patology: {
            ...state.patology,
            remedys: [...state.patology.remedys, action.remedy],
            },
        };
        case "addmedicalTratament":
        return {
            ...state,
            patology: {
            ...state.patology,
            medicalTratament: [...state.patology.medicalTratament, action.tratament],
            },
        };
        case "addallergy":
        return {
            ...state,
            patology: {
            ...state.patology,
            allergy: [...state.patology.allergy, action.allergy],
            },
        };
        case "addbloodType":
        return {
            ...state,
            patology: {
            ...state.patology,
            bloodType: [...state.patology.bloodType, action.bloodType],
            },
        };
        case "addsmoke":
        return {
            ...state,
            social: {
            ...state.social,
            smoke:  action.smoke,
            },
        };
        case "adddrugs":
        return {
            ...state,
            social: {
            ...state.social,
            drugs:  action.drugs,
            },
        };
        case "addphisicalExercises":
        return {
            ...state,
            social: {
            ...state.social,
            phisicalExercises:  action.phisicalExercises,
            },
        };
        case "addbeverageAlcholic":
            return {
                ...state,
                social: {
                ...state.social,
                beverageAlcholic:  action.beverageAlcholic,
                },
            };

        default:
        return state;
    }
      
}