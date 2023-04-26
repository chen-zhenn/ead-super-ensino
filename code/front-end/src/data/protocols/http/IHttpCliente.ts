export interface IHttpGetClient {
  get(url: string): Promise<void>;
}
