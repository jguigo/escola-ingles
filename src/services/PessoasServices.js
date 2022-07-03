const Services = require("./Services");
const database = require("../database/models");

class PessoasServices extends Services {
   constructor() {
      super("Pessoas");
      this.matriculas = new Services("Matriculas");
   }

   async pegaRegistrosAtivos(where = {}) {
      return database[this.nomeDoModelo].findAll({ where: { ...where } });
   }

   async pegaTodosOsRegistros(where = {}) {
      //.scope("todos") --> foi definido no modelo de Pessoas, e para utiliza-lo, coloco antes do método que quero utilizar
      return database[this.nomeDoModelo]
         .scope("todos")
         .findAll({ where: { ...where } });
   }

   async cancelaPessoaMatriculas(estudanteId) {
      //com o uso da transaction, qualquer umas das operação com o banco que der problema, ele roda um rollback
      return database.sequelize.transaction(async (transacao) => {
         await super.atualizaRegistro({ ativo: false }, estudanteId, {
            transaction: transacao,
         });
         await this.matriculas.atualizaRegistros(
            { status: "cancelado" },
            { estudante_id: estudanteId },
            { transaction: transacao }
         );
      });
   }
}

module.exports = PessoasServices;
