import { AxiosHttpClient } from "./AxiosHttpClient";
import axios from "axios";

describe("Axios Http client", () => {
  let url: string;
  beforeEach(() => {
    url = "http://localhost:8000/api/exercicios";
  });
  it("Get do Axios foi chamado com URL correta", async () => {
    const axiosSpy = jest.spyOn(axios, 'get');
    const sut = AxiosHttpClient;
    await sut.get(url);
    expect(axiosSpy).toHaveBeenCalledWith(url)
  });
});
