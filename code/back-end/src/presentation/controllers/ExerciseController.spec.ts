import ExerciseController from "./ExerciseController";
import { IExercise, IStatement } from "../../domain/IExercise";
import { IExerciseController } from "../../domain/IExerciseController";

describe("ExerciseController", () => {
    let exercise: IExerciseController;
    let exerciseList:IExercise[];
    let mockList: IExercise;
    let listSpy: jest.SpyInstance<IExercise[], []>;

    beforeEach(() => {
        exercise = new ExerciseController();
        listSpy = jest.spyOn(exercise, "list");
        exerciseList = exercise.list();
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
        expect(listSpy).toBeCalledTimes(1)
    })

    it("Dever retornar uma lista do tipo execício vazia", () => {
        const expectedList: IExercise[] = [];
        expect(exerciseList).toEqual(expectedList)
        expect(listSpy).toBeCalled()
    });

    it("Dever retornar uma lista com objeto do tipo execício", () => {
        const expectedList: IExercise[] = [mockList];
        listSpy.mockReturnValueOnce(expectedList);
        exerciseList = exercise.list();
        expect(exerciseList).toEqual(expectedList);
      });

      it("Dever retornar um ojeto enunciado correta", () => {
        const expectedList: IExercise[] = [mockList];
        const expectEnunciado = expectedList[0].questao.enunciado 
        listSpy.mockReturnValueOnce(expectedList);
        exerciseList = exercise.list();
        const { enunciado } = exerciseList[0].questao
        expect(enunciado).toEqual(expectEnunciado)
      })

      it("Dever retornar uma lista de alternativas correta", () => {
        const expectedList: IExercise[] = [mockList];
        const expectAlternativasList = expectedList[0].questao.alternativas 
        listSpy.mockReturnValueOnce(expectedList);
        exerciseList = exercise.list();
        const alternativaList = exerciseList[0].questao.alternativas
        expect(alternativaList).toEqual(expectAlternativasList)
      })
      
});
