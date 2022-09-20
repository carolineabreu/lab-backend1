import express from "express";
import data from "../data.js";

const foodRouter = express.Router();

foodRouter.get("/", (req, res) => {
  return res.json(data);
});

foodRouter.post("/create-food", (req, res) => {
  data.push(req.body);

  return res.json(data);
});

foodRouter.put("/:id", (req, res) => {
  const { id } = req.params;

  data[id] = req.body;

  return res.json(data);
});

foodRouter.delete("/:id", (req, res) => {
  const { id } = req.params;

  data.splice(id, 1);

  return res.send();
});

export { foodRouter };
