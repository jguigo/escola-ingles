const { Router } = require("express");
const PessoasController = require("../controllers/PessoasController");

const routes = Router();

routes.get('/pessoas', PessoasController.pegaTodasAsPessoas)
routes.get('/pessoas/:id', PessoasController.pegarUmaPessoa)

module.exports = routes;
