import { IHttpGetClient, IHttpResponse } from "@/data/protocols/http";
import { RemoteExercise } from "@/data/usecases/exercise/RemoteExercise";

describe("RemoteExercise", () => {
  let url: string;
  let response: IHttpResponse;

  beforeEach(() => {
    url = "http://localhost:8000/api/exercicios";
    response = {
      statusCode: 200,
      body: [],
    };
  });

  it("Deve ser chamado com URL correta", async () => {
    class HttpGetClientSpy implements IHttpGetClient {
      public url: string;
      public response: IHttpResponse = response;

      constructor(url: string) {
        this.url = url;
      }

      async get(url: string): Promise<IHttpResponse> {
        return this.response;
      }
    }
    const httGetClient = new HttpGetClientSpy(url);
    const sut = new RemoteExercise(url, httGetClient);
    await sut.list();
    expect(httGetClient.url).toBe(url);
  });

  it("Deve retornar um response correto para status code 200", async () => {
    response.body = [
      {
        _id: "64473b89e0d5eacc7718b471",
        exercicios: [
          {
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
                  { texto: "Queria saber o por quê dessa confusão." },
                  { texto: "Queria saber porque você faltou a aula." },
                  { texto: "Acordo cedo porque gosto de estudar." },
                ],
              },
              alternativas: [
                { id: 1, letra: "a", texto: "II e III." },
                { id: 2, letra: "b", texto: "Apenas a I." },
                { id: 3, letra: "c", texto: "I, II e III." },
                { id: 4, letra: "d", texto: "Apenas a III." },
              ],
            },
          },
        ],
      },
    ];
    class HttpGetClientSpy implements IHttpGetClient {
      public url: string;
      public response: IHttpResponse = response;

      constructor(url: string) {
        this.url = url;
      }

      async get(url: string): Promise<IHttpResponse> {
        return this.response;
      }
    }
    const httGetClient = new HttpGetClientSpy(url);
    const sut = new RemoteExercise(url, httGetClient);
    const dataResponse = await sut.list();
    expect(dataResponse).toEqual(response);
  });

  it("Deve lançar um erro para status code 500", async () => {
    response.statusCode = 500;
    class HttpGetClientSpy implements IHttpGetClient {
      public url: string;
      public response: IHttpResponse = response;

      constructor(url: string) {
        this.url = url;
      }

      async get(url: string): Promise<IHttpResponse> {
        return this.response;
      }
    }
    class GenericError extends Error {
      constructor(msg: string) {
        super(msg);
      }
    }
    const error = new GenericError("Internal server error");
    const httGetClient = new HttpGetClientSpy(url);
    const sut = new RemoteExercise(url, httGetClient);
    await expect(sut.list()).rejects.toThrow(error);
  });
});
