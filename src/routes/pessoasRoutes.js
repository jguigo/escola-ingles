const { Router } = require("express");
const PessoasController = require("../controllers/PessoasController");

const routes = Router();

routes.get("/pessoas", PessoasController.pegaTodasAsPessoas);
routes.get("/pessoas/:id", PessoasController.pegarUmaPessoa);
routes.post("/pessoas", PessoasController.criaPessoa);
routes.put("/pessoas/:id", PessoasController.atualizaPessoa);
routes.delete("/pessoas/:id", PessoasController.apagaPessoa);

routes.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoasController.pegarUmaMatricula);
routes.post('/pessoas/:estudanteId/matricula/matricula') 
routes.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoasController.atualizaMatricula);
routes.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoasController.apagaMatricula);

module.exports = routes;
