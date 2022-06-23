const { Router } = require("express");
const PessoasController = require("../controllers/PessoasController");

const routes = Router();

routes.get('/pessoas', PessoasController.pegaTodasAsPessoas)

module.exports = routes;
