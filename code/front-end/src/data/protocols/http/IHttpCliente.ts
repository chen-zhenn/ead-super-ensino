import { IHttpResponse } from "./IHttpResponse";

export interface IHttpGetClient {
  get(url: string): Promise<IHttpResponse>;
}
 