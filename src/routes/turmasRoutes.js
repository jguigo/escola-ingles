const { Router } = require("express");
const TurmasController = require("../controllers/TurmasController");

const routes = Router();

routes.get("/turmas", TurmasController.pegaTodasAsTurmas);
routes.get("/turmas/:id", TurmasController.pegarUmaTurma);
routes.post("/turmas", TurmasController.criaTurma);
routes.put("/turmas/:id", TurmasController.atualizaTurma);
routes.delete("/turmas/:id", TurmasController.apagaTurma);

module.exports = routes;
