const { Router } = require("express");
const PessoasController = require("../controllers/PessoasController");

const routes = Router();

routes.get("/pessoas", PessoasController.pegaPessoasAtivas);
routes.get("/pessoas/todos", PessoasController.pegaTodasAsPessoas);
routes.get("/pessoas/:id", PessoasController.pegarUmaPessoa);
routes.get('/pessoas/:estudanteId/matricula', PessoasController.pegaMatriculas);
routes.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoasController.pegarUmaMatricula);
routes.get('/pessoas/matricula/:turmaId/confirmadas', PessoasController.pegaMatriculasPorTurma);
routes.get('/pessoas/matricula/lotada', PessoasController.pegaTurmasLotadas);
routes.get('/pessoas/matricula/disponiveis', PessoasController.pegaTurmasDisponiveis);



routes.post("/pessoas", PessoasController.criaPessoa);
routes.post('/pessoas/:estudanteId/matricula/matricula') 
routes.post("/pessoas/:id/restaura", PessoasController.restauraPessoa);
routes.post("/pessoas/:estudanteId/cancela", PessoasController.cancelaPessoa);


routes.put("/pessoas/:id", PessoasController.atualizaPessoa);
routes.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoasController.atualizaMatricula);


routes.delete("/pessoas/:id", PessoasController.apagaPessoa);
routes.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoasController.apagaMatricula);

module.exports = routes;
