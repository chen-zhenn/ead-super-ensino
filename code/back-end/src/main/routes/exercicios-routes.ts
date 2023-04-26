import { Router } from "express";
import { makeExerciseController as exerciseController } from "../../main/factories/ExerciseFactory";

export default (router: Router): void => {
  
  router.get("/exercicios", async (req, res) => {
    try {
      const exercises = await exerciseController();
      const list = await exercises.list();
      res.status(200).send(list);
    } catch (error) {
      res.status(500).send({ error: "Internal server error" });
    }
  });
}
