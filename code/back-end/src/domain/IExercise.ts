export interface IOptions {
    texto: string;
}
export interface IChoices {
    id: number;
    letra: string;
    texto: string; 
}
export interface IStatement {
    titulo: string;
    objetivo: string;
    opcoes: IOptions[];

}
export interface IQuestion {
    resposta: number;
    enunciado: IStatement;
    alternativas: IChoices[]; 
}
export interface IExercise {
    disciplina: string;
    materia: string;
    assunto: string;
    tema: string;
    subtema: string;
    questao: IQuestion;
}