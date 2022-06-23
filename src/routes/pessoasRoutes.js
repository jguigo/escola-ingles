const { Router } = require("express");
const PessoasController = require("../controllers/PessoasController");

const routes = Router();

routes.get("/pessoas", PessoasController.pegaTodasAsPessoas);
routes.get("/pessoas/:id", PessoasController.pegarUmaPessoa);
routes.post("/pessoas", PessoasController.criaPessoa);
routes.put("/pessoas/:id", PessoasController.atualizaPessoa);
routes.delete("/pessoas/", PessoasController.apagaPessoa);

module.exports = routes;
