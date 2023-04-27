import { IHttpResponse } from "@/data/protocols/http/IHttpResponse";
import axios from "axios";

export class AxiosHttpClient {
  static async get(url: string): Promise<IHttpResponse> {
    return await axios.get(url);
  }
}
