import { MongoDatabase } from "../../infra/database/mongodb/MongoDatabase";
import ExerciseController from "./ExerciseController";
import { IExercise, IStatement } from "../../domain/IExercise";
import { IExerciseController } from "../../domain/IExerciseController";
import { IExerciseRepository } from "../../domain/IExerciseRepository";

/**
 * Refatorar devido mudanças no
 * banco de dados...
 */

describe("ExerciseController", () => {
    let dbMongo = MongoDatabase.getInstance();
    let exercise: IExerciseController;
    let exerciseList: IExercise[];
    let mockList: IExercise;
    let listSpy: jest.SpyInstance<Promise<IExercise[]>>;

    beforeEach(async () => {
        listSpy = jest.spyOn(exercise, "list");
        exerciseList = await exercise.list();
        mockList = {
            disciplina: "Português",
            materia: "Gramática",
            assunto: "Ortografia",
            tema: "Acentuação gráfica",
            subtema: "Uso dos porquês",
            questao: {
                resposta: 1,
                enunciado: {
                    titulo: "Análise as afirmativas a seguir.",
                    objetivo: "Com relação ao uso dos porquês, estão corretas:",
                    opcoes: [
                        {
                            texto: "Queria saber o por quê dessa confusão.",
                        },
                    ],
                },
                alternativas: [
                    {
                        id: 1,
                        letra: "a",
                        texto: "II e III.",
                    },
                ],
            },
        };
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("Dever chamar o método list uma vez", () => {
        expect(listSpy).toBeCalledTimes(1);
    });

    it("Dever retornar uma lista do tipo execício vazia", async () => {
        const expectedList: IExercise[] = [];
        expect(exerciseList).toEqual(expectedList);
        expect(listSpy).toBeCalled();
    });

    it("Dever retornar uma lista com objeto do tipo execício", async () => {
        const expectedList: IExercise[] = [mockList];
        listSpy.mockReturnValueOnce(Promise.resolve(expectedList));
        exerciseList = await exercise.list();
        expect(exerciseList).toEqual(expectedList);
    });

    it("Dever retornar um ojeto enunciado correta", async () => {
        const expectedList: IExercise[] = [mockList];
        const expectEnunciado = expectedList[0].questao.enunciado;
        listSpy.mockReturnValueOnce(Promise.resolve(expectedList));
        exerciseList = await exercise.list();
        const { enunciado } = exerciseList[0].questao;
        expect(enunciado).toEqual(expectEnunciado);
    });

    it("Dever retornar uma lista de alternativas correta", async () => {
        const expectedList: IExercise[] = [mockList];
        const expectAlternativasList = expectedList[0].questao.alternativas;
        listSpy.mockReturnValueOnce(Promise.resolve(expectedList));
        exerciseList = await exercise.list();
        const alternativaList = exerciseList[0].questao.alternativas;
        expect(alternativaList).toEqual(expectAlternativasList);
    });
});
