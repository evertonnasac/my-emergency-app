export interface Anamnesis  {
    patology : {
        illness: string[]
        allergy : string[],
        remedys: string[],    
        medicalTratament: string[],
        bloodType: string
    } 
    social : {
        smoke: "Sim"|"Nao",
        drugs: "Sim"|"Nao",
        beverageAlcholic: "Sim"|"Nao",
        phisicalExercises: "Sim"|"Nao",
    } 

   
}

