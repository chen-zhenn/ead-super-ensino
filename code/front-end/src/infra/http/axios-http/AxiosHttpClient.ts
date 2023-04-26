import axios from "axios";

export class AxiosHttpClient {
  static async get(url: string): Promise<void> {
    return await axios.get(url);
  }
}
