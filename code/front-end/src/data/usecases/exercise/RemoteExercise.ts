import { IHttpGetClient, IHttpResponse } from "@/data/protocols/http";
import { InternalServerError } from "@/domain/errors/internal-server-error";

export class RemoteExercise {
  constructor(
    private readonly url: string,
    private httpClient: IHttpGetClient
  ) {}

  async list(): Promise<IHttpResponse> {
    const response = await this.httpClient.get(this.url);
    if(response.statusCode === 500) throw new InternalServerError() 
    return response 
  }
}
