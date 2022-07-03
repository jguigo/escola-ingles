const database = require("../database/models");

class Services {
   constructor(nomeDoModelo) {
      this.nomeDoModelo = nomeDoModelo;
   }

   async pegaTodosOsRegistros() {
      return database[this.nomeDoModelo].findAll();
   }

   async pegaUmRegistro(id) {
      //
   }

   async criaRegistro(dados) {
      //
   }

   async atualizaRegistro(dadosAtualizados, id, trasacao = {}) {
      return database[this.nomeDoModelo].update(
         dadosAtualizados,
         {
            where: { id },
         },
         trasacao
      );
   }

   async atualizaRegistros(dadosAtualizados, where, trasacao = {}) {
      return database[this.nomeDoModelo].update(
         dadosAtualizados,
         {
            where: { ...where },
         },
         trasacao
      );
   }
}

module.exports = Services;
