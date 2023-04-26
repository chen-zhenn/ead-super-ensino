import { AxiosHttpClient } from "./AxiosHttpClient";
import axios from "axios";

describe("Axios Http client", () => {
  let url: string;

  describe("GET:", () => {
    beforeEach(() => {
      url = "http://localhost:8000/api/exercicios";
    });

    it("Deve chamar com URL correta", async () => {
      const axiosSpy = jest.spyOn(axios, "get");
      const sut = AxiosHttpClient;
      await sut.get(url);
      expect(axiosSpy).toHaveBeenCalledWith(url);
    });
    it.skip("Deve retornar um response correto para status code 200", async () => {
        // Teste dever ser implementado
    });
  });
});
