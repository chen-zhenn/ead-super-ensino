import { IHttpGetClient } from "@/data/protocols/http/IHttpCliente";
import { RemoteExercise } from "@/data/usecases/exercise/RemoteExercise";

describe("RemoteExercise", () => {
  it("Deve ser chamado com URL correta", async () => {
    class HttpGetClientSpy {
        public url?: string
        
        constructor(url: string){
            this.url = url
        }

        async get(url: string): Promise<void> {
            return Promise.resolve();
        }
    }
    const url = "some_url";
    const httGetClient = new HttpGetClientSpy(url);
    const sut = new RemoteExercise(url, httGetClient);
    await sut.list();
    expect(httGetClient.url).toBe(url)
  });
});
