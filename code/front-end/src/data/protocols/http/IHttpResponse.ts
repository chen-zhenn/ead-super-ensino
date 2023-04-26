import { IExercise } from "@/domain/models/IExercise";

export interface IHttpBody {
  _id: string;
  exercicios: IExercise[];
}

export interface IHttpResponse {
  statusCode: number;
  body: IHttpBody[];
}
