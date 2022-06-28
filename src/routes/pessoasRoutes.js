const { Router } = require("express");
const PessoasController = require("../controllers/PessoasController");

const routes = Router();

routes.get("/pessoas", PessoasController.pegaPessoasAtivas);
routes.get("/pessoas/todos", PessoasController.pegaTodasAsPessoas);
routes.get("/pessoas/:id", PessoasController.pegarUmaPessoa);
routes.post("/pessoas", PessoasController.criaPessoa);
routes.put("/pessoas/:id", PessoasController.atualizaPessoa);
routes.delete("/pessoas/:id", PessoasController.apagaPessoa);

routes.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoasController.pegarUmaMatricula);
routes.post('/pessoas/:estudanteId/matricula/matricula') 
routes.post("/pessoas/:id/restaura", PessoasController.restauraPessoa);
routes.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoasController.atualizaMatricula);
routes.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoasController.apagaMatricula);

module.exports = routes;
