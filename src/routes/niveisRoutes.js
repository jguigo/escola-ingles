const { Router } = require("express");
const NiveisController = require("../controllers/NiveisController");

const routes = Router();

routes.get("/niveis", NiveisController.pegaTodasOsNiveis);
routes.get("/niveis/:id", NiveisController.pegarUmNivel);
routes.post("/niveis", NiveisController.criaNivel);
routes.put("/niveis/:id", NiveisController.atualizaNivel);
routes.delete("/niveis/:id", NiveisController.apagaNivel);
routes.post("/niveis/:id/restaura", NiveisController.restauraNivel);

module.exports = routes;
