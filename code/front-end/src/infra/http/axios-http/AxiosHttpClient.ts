import { IHttpResponse } from "@/data/protocols/http/IHttpResponse";
import axios from "axios";

export class AxiosHttpClient {
  static async get(url: string): Promise<IHttpResponse> {
    const data = await axios.get(url);
    const response: IHttpResponse = {
        statusCode: data.status,
        body: data?.data
    }
    return response
  }
}
