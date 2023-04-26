import { IHttpGetClient } from "data/protocols/http/IHttpCliente";

export class RemoteExercise {
  constructor(
    private readonly url: string,
    private httpClient: IHttpGetClient
  ) {}

  async list(): Promise<void> {
    return Promise.resolve();
  }
}
