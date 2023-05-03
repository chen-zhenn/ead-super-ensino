import { AxiosHttpClient } from "@/infra/http/axios-http/AxiosHttpClient";
import { RemoteExercise } from "@/data/usecases/exercise/RemoteExercise";
import mock from  "../../../../../back-end/src/db.json"

export const makeExercise = () => {
  const url = "http://localhost:8000/api/exercicios";
  const httpClient = AxiosHttpClient;
  const remoteExercise = new RemoteExercise(url, httpClient);

  async function getMock() {
    return await mock
  }
  
  async function getData() {
    return await remoteExercise.list()
  }

  return {
    getData,
    getMock
  }
};
